import { NextApiRequest, NextApiResponse } from 'next';
import { fetchTopLanguages, Language } from '../../lib/fetch-top-languages';

const width = 500;
const height = 220;
const marginSides = 25;

const styles = `
  text { font-family: 'Segoe UI', Ubuntu, Sans-Serif; }
  .lang { fill: #333333; font-size: 12px; font-weight: 400; }
  .title { fill: #3d7e9a; font-size: 18px; font-weight: 600; }
  .bg { fill: #ffffff; stroke: #e4e2e2; }

  @media (prefers-color-scheme: dark) {
    .lang { fill: #c9d1d9; }
    .title { fill: #58a6ff; }
    .bg { fill: #0d1117; stroke: #30363d; }
  }
`;

interface LanguageRectangle {
  color: string;
  start: number;
  size: number;
}

const BarGraph = ({ langs }: { langs: Language[] }) => {
  const graphWidth = width - 2 * marginSides;
  let nextStart = 0;
  const langRectangles = langs.map<LanguageRectangle>(({ color, size }) => {
    const langRect = { start: nextStart, size, color };
    nextStart += size;
    return langRect;
  });

  return `
    <g transform="translate(${marginSides}, 50) scale(${graphWidth}, 8)">
      ${langRectangles
        .map(
          ({ color, start, size }, idx) =>
            `<rect key="b${idx}" fill="${color}" x="${start}" width="${size}" height="1" />`,
        )
        .join('')}
    </g>`;
};

const LanguageItem = ({ lang, idx }: { lang: Language; idx: number }) => {
  const x = idx % 2 === 0 ? marginSides : width / 2;
  const y = 75 + 28 * Math.floor(idx / 2);
  const r = 6;

  return `
    <g transform="translate(${x}, ${y})">
      <circle cx="${r + 2}" cy="${r}" r="${r}" fill="${lang.color}" />
      <text x="${2 * r + 12}" y="${r + 5}" class="lang">
        ${lang.name} ${(100 * lang.size).toFixed(2)}%
      </text>
    </g>`;
};

const LanguagesWidget = async (_: NextApiRequest, res: NextApiResponse) => {
  const langs = await fetchTopLanguages();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
      width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <style>${styles}</style>
      <rect
        class="bg" x="1" y="1" rx="10"
        width="${width - 2}" height="${height - 2}"
      />
      <text x="${marginSides}" y="35" class="title">
        Top 10 Most Used Languages
      </text>
      ${BarGraph({ langs })}
      ${langs.map((lang, idx) => LanguageItem({ lang, idx })).join('')}
    </svg>`;

  res.status(200).setHeader('Content-Type', 'image/svg+xml').send(svg);
};

export default LanguagesWidget;
