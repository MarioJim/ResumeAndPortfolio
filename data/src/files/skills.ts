export interface Skill {
  title: string;
  points: string;
}

export const skills: Skill[] = [
  {
    title: 'Languages',
    points: 'TypeScript (proficient), Rust, C++, Java, Python',
  },
  {
    title: 'Tools & Platforms',
    points: 'Mercurial, Git, Docker, GitHub Actions (CI/CD pipelines)',
  },
];
