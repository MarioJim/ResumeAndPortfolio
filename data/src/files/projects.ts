export interface Project {
  title: string;
  subtitle: string;
  date: string;
  points: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Web application for Dauverre A.C.',
    subtitle: 'A web app with serverless architecture using Firebase',
    date: 'September - December 2020',
    points: [
      'Developed an application where the relatives of the residents could consult reports on how the elderly were doing, in addition to advertising the nursing home',
      'Frontend written in React with TypeScript, using Material UI components and react-router-dom',
      "Executed concurrency and security-sensitive actions using Cloud Functions (Firebase's serverless framework)",
      "Took advantage of GitHub Actions to verify every pull request and continuously deploy to Firebase's Hosting",
    ],
    link: 'https://github.com/KevinTMtz/DauverreWeb',
  },
  {
    title: 'Resume and portfolio',
    subtitle: 'LaTeX pdf and React App compiled from the same database',
    date: 'Since September 2019',
    points: [
      'Wrote TypeScript packages for compiling the data to a static React website and to a PDF document',
      'Encapsulated my development environment within a Docker image used to build the project in the CI pipeline',
      'Website automatically deployed and hosted on GitHub Pages (mariojim.github.io)',
    ],
    link: 'https://github.com/MarioJim/ResumeAndPortfolio',
  },
];
