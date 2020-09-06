import { JSDOM } from 'jsdom';
import { Language, LanguageRectangle } from './types';

const document: Document = new JSDOM().window.document;
const width = 500;
const height = 220;
const marginSides = 25;

export const renderSVG = (languages: Language[]): string => {
  const svg = document.createElement('svg');
  setupSvg(svg);
  svg.appendChild(renderBackground());
  svg.appendChild(renderTitle());
  svg.appendChild(renderGraph(languages));
  languages.forEach((language, index) =>
    svg.appendChild(renderLanguage(language, index)),
  );
  return svg.outerHTML;
};

const setupSvg = (svg: HTMLElement) => {
  svg.setAttribute('width', `${width}`);
  svg.setAttribute('height', `${height}`);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
};

const renderBackground = (): HTMLElement => {
  const bg = document.createElement('rect');
  bg.setAttribute('width', `${width - 2}`);
  bg.setAttribute('height', `${height - 2}`);
  bg.setAttribute('x', `${1}`);
  bg.setAttribute('y', `${1}`);
  bg.setAttribute('rx', `10`);
  bg.setAttribute('fill', '#ffffff');
  bg.setAttribute('stroke', '#e4e2e2');
  return bg;
};

const renderTitle = (): HTMLElement => {
  const title = document.createElement('text');
  title.textContent = 'Top 10 Most Used Languages';
  title.setAttribute('x', `${marginSides}`);
  title.setAttribute('y', '35');
  title.style.fontWeight = '600';
  title.style.fontSize = '18px';
  title.style.fontFamily = "'Segoe UI', Ubuntu, Sans-Serif";
  title.style.fill = '#3d7e9a';
  return title;
};

const renderGraph = (languages: Language[]): HTMLElement => {
  const graph = document.createElement('g');
  const graphWidth = width - 2 * marginSides;
  graph.setAttribute(
    'transform',
    `translate(${marginSides}, 50) scale(${graphWidth}, 8)`,
  );
  let cumSize = 0;
  languages
    .map<LanguageRectangle>(({ color, size }) => {
      const langRect = {
        start: cumSize,
        size,
        color,
      };
      cumSize += size;
      return langRect;
    })
    .forEach(langRect => {
      graph.appendChild(renderLanguageRectangle(langRect));
    });
  return graph;
};

const renderLanguageRectangle = (langRect: LanguageRectangle): HTMLElement => {
  const rect = document.createElement('rect');
  rect.setAttribute('fill', langRect.color);
  rect.setAttribute('x', `${langRect.start}`);
  rect.setAttribute('width', `${langRect.size}`);
  rect.setAttribute('height', '1');
  return rect;
};

const renderLanguage = (language: Language, index: number): HTMLElement => {
  const group = document.createElement('g');
  const x = index % 2 === 0 ? marginSides : width / 2;
  const y = 75 + 28 * Math.floor(index / 2);
  group.setAttribute('transform', `translate(${x}, ${y})`);

  const circle = document.createElement('circle');
  const circlePos = 6;
  circle.setAttribute('cx', `${2 + circlePos}`);
  circle.setAttribute('cy', `${circlePos}`);
  circle.setAttribute('r', `${circlePos}`);
  circle.setAttribute('fill', language.color);
  group.appendChild(circle);

  const title = document.createElement('text');
  title.textContent = `${language.name} ${(100 * language.size).toFixed(2)}%`;
  title.setAttribute('x', `${2 * circlePos + 12}`);
  title.setAttribute('y', `${circlePos + 5}`);
  title.style.fontWeight = '400';
  title.style.fontSize = '12px';
  title.style.fontFamily = "'Segoe UI', Ubuntu, Sans-Serif";
  title.style.fill = '#333333';
  group.appendChild(title);

  return group;
};
