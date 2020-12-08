export interface Skill {
  title: string;
  points: string;
}

export const skills: Skill[] = [
  {
    title: 'Languages',
    points:
      'JavaScript/TypeScript (proficient), Python (fluent), Java, C++, SQL (MySQL/MariaDB), Rust, Dart',
  },
  {
    title: 'Frameworks',
    points: 'React, Express, D3.js, Flutter, JavaFX',
  },
  {
    title: 'Tools & Platforms',
    points:
      'Git, Docker, GitHub Actions (CI/CD), Firebase, Node.js, Heroku, Chrome DevTools',
  },
];
