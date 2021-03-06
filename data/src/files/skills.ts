export interface Skill {
  title: string;
  points: string;
}

export const skills: Skill[] = [
  {
    title: 'Languages',
    points:
      'JavaScript/TypeScript (proficient), Python (fluent), Java, C++, C, Rust, SQL (MySQL/MariaDB)',
  },
  {
    title: 'Frameworks',
    points: 'React, Express, Flutter',
  },
  {
    title: 'Tools & Platforms',
    points:
      'Git, GitHub Actions (CI/CD), Docker, Firebase, Node.js, Chrome DevTools',
  },
];
