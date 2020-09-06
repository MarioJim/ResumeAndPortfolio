export interface Skill {
  title: string;
  points: string;
}

export const skills: Skill[] = [
  {
    title: 'Languages',
    points:
      'Java (proficient), JavaScript (fluent), TypeScript, Python, C++, SQL (MySQL/MariaDB), Rust, Dart',
  },
  {
    title: 'Frameworks',
    points: 'React, D3.js, Flutter, Express, JavaFX',
  },
  {
    title: 'Tools',
    points: 'Git, Docker, Chrome DevTools',
  },
];
