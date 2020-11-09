export interface Project {
  title: string;
  subtitle: string;
  date: string;
  points: string[];
  link: string;
  includeInCV: boolean;
}

export const projects: Project[] = [
  {
    title: 'Alvap Store prototype',
    subtitle:
      'A store prototype with a React frontend and a Express and SQLite backend',
    date: 'May - June 2020',
    points: [
      'Frontend developed using Create React App with TypeScript, styled components and react-router',
      'Backend based on Express routes, and using a SQLite database to make it portable and self-contained',
      'Written in TypeScript to improve readability through type checking',
      'Deployed and hosted on a Heroku server',
    ],
    link: 'https://github.com/MarioJim/alvap-store',
    includeInCV: true,
  },
  {
    title: 'Resume and portfolio',
    subtitle: 'LaTeX pdf and React App compiled from the same database',
    date: 'Since September 2019',
    points: [
      'Wrote TypeScript packages for compiling the data to a static React website and to .tex files',
      'Encapsulated my development environment within a Docker container so that it can be easily replicated and used with Visual Studio Code and the Remote - Containers extension',
      'Website automatically deployed and hosted on GitHub Pages (mariojim.github.io)',
    ],
    link: 'https://github.com/MarioJim/ResumeAndPortfolio',
    includeInCV: true,
  },
];

export const allowedRepos: number[] = [
  206996709, // ResumeAndPortfolio
  267439763, // alvap-store
  196892751, // knocki-app
  201521942, // CaveDungeon
  220822569, // PatasTeam/GraphicAVLTree
  167217902, // CompetitiveProgramming
  252565333, // finite-automata-graph
  259530650, // grammar-parsing-tree
  172366859, // mTouch
  245031161, // KevinTMtz/GunnedDown
  282499927, // memory_admin_simulator
  255437430, // finite-automata-tui
  296929253, // fuzzy-pdf
  299703320, // critical_path_calc
];
