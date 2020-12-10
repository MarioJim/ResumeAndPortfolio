import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Language, LanguageRectangle } from './types';

const width = 500;
const height = 220;
const marginSides = 25;

export const renderSVG = (languages: Language[]): string =>
  ReactDOMServer.renderToString(<Widget langs={languages} />);

const Widget: React.FC<{ langs: Language[] }> = ({ langs }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
  >
    <style>
      {
        "text { font-family: 'Segoe UI', Ubuntu, Sans-Serif; fill: #333333; font-size: 12px; font-weight: 400; }"
      }
    </style>
    <Background />
    <Title title="Top 10 Most Used Languages" />
    <BarGraph langs={langs} />
    {langs.map((lang, idx) => (
      <LanguageItem key={`it${idx}`} lang={lang} idx={idx} />
    ))}
  </svg>
);

const Background: React.FC = () => (
  <rect
    width={width - 2}
    height={height - 2}
    x={1}
    y={1}
    rx={10}
    fill="#ffffff"
    stroke="#e4e2e2"
  />
);

const Title: React.FC<{ title: string }> = ({ title }) => (
  <text
    x={marginSides}
    y={35}
    style={{ fill: '#3d7e9a', fontSize: '18px', fontWeight: 600 }}
  >
    {title}
  </text>
);

const BarGraph: React.FC<{ langs: Language[] }> = ({ langs }) => {
  const graphWidth = width - 2 * marginSides;
  let cumSize = 0;
  const langRectangles = langs.map<LanguageRectangle>(({ color, size }) => {
    const langRect = { start: cumSize, size, color };
    cumSize += size;
    return langRect;
  });
  return (
    <g transform={`translate(${marginSides}, 50) scale(${graphWidth}, 8)`}>
      {langRectangles.map((lang, idx) => (
        <rect
          key={`bar${idx}`}
          fill={lang.color}
          x={lang.start}
          width={lang.size}
          height={1}
        />
      ))}
    </g>
  );
};

const LanguageItem: React.FC<{ lang: Language; idx: number }> = ({
  lang,
  idx,
}) => {
  const x = idx % 2 === 0 ? marginSides : width / 2;
  const y = 75 + 28 * Math.floor(idx / 2);
  const radius = 6;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx={2 + radius} cy={radius} r={radius} fill={lang.color} />
      <text x={2 * radius + 12} y={radius + 5}>
        {`${lang.name} ${(100 * lang.size).toFixed(2)}%`}
      </text>
    </g>
  );
};
