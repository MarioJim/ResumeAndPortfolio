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
      'My team and I developed an application with the objective of creating a platform where the relatives of the residents could consult reports on how the elderly were doing, in addition to publicizing the nursing home',
      'Frontend written in React with TypeScript, using Material-UI components and react-router-dom',
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
      'Encapsulated my development environment within a Docker container so that it can be easily replicated and used with Visual Studio Code and the Remote - Containers extension',
      'Website automatically deployed and hosted on GitHub Pages (mariojim.github.io)',
    ],
    link: 'https://github.com/MarioJim/ResumeAndPortfolio',
  },
];

export const allowedRepos: number[] = [
  167217902, // MarioJim/CompetitiveProgramming
  206996709, // MarioJim/ResumeAndPortfolio
  252565333, // MarioJim/finite-automata-graph
  267439763, // MarioJim/alvap-store
  296929253, // MarioJim/fuzzy-pdf
  297854675, // KevinTMtz/DauverreWeb
  328483336, // MarioJim/touchegg-music-client
  328806789, // MarioJim/HNReader
];
