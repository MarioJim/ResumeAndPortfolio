export interface Project {
  title: string;
  subtitle: string;
  date: string;
  points: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Web platform for Dauverre A.C.',
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
];
