export interface Skill {
  title: string;
  points: string;
}

export const skills: Skill[] = [
  {
    title: 'Languages',
    points: 'TypeScript (proficient), Python (fluent), Java, Rust, C++, Dart',
  },
  {
    title: 'Frameworks',
    points: 'React, Flutter, Express, React Native',
  },
  {
    title: 'Tools & Platforms',
    points:
      'Mercurial, Git, Docker, GitHub Actions (CI/CD pipelines), Firebase, Ansible',
  },
];
