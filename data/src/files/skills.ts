export interface Skill {
  title: string;
  points: string;
}

export const skills: Skill[] = [
  {
    title: 'Languages',
    points:
      'Java (proficient), JavaScript (fluent), TypeScript, Rust, Python, C++, Dart',
  },
  {
    title: 'Frameworks',
    points: 'React, D3.js, Flutter, Express, JavaFX',
  },
  {
    title: 'Tools',
    points: 'Git, SQL (MySQL/MariaDB), Docker, Chrome DevTools',
  },
];
