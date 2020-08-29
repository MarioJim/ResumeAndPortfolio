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
    title: 'Alvap Store Prototype',
    subtitle:
      'A store prototype with a React frontend and a Express and SQLite backend',
    date: 'Fourth semester',
    points: [
      'Frontend developed using Create React App with TypeScript, styled components and react-router',
      'Backend based on Express routes, and using a SQLite database to make it portable and self-contained',
      'Written in TypeScript to improve readability through type checking',
      'Uploaded and hosted on a Heroku server',
    ],
    link: 'https://github.com/MarioJim/alvap-store',
    includeInCV: true,
  },
  {
    title: 'Resume and Portfolio',
    subtitle: 'LaTeX pdf and React App compiled from the same database',
    date: 'Since third semester',
    points: [
      'Wrote TypeScript packages for compiling the data to a static React website and to .tex files',
      'Encapsulated my development environment within a Docker container so that it can be easily and exactly replicated with Visual Studio Code and the Remote - Containers extension',
      'Website hosted on GitHub Pages (mariojim.github.io)',
    ],
    link: 'https://github.com/MarioJim/ResumeAndPortfolio',
    includeInCV: true,
  },
  {
    title: 'Cave Dungeon',
    subtitle: 'Procedurally generated RPG written in JavaFX',
    date: 'Second semester',
    points: [
      'Used Gradle to run, debug and test the game',
      'Implemented an algorithm to randomly generate map and room layouts',
      'Learned JavaFX to make a unique graphic interface',
    ],
    link: 'https://github.com/MarioJim/CaveDungeon',
    includeInCV: true,
  },
];

export interface AllowedRepos {
  id: number;
  onlineDemo?: string;
}

export const allowedRepos: AllowedRepos[] = [
  { id: 206996709 }, // ResumeAndPortfolio
  { id: 267439763, onlineDemo: 'https://alvap.herokuapp.com/' }, // alvap-store
  { id: 196892751, onlineDemo: 'https://mariojim.github.io/knocki-app/' }, // knocki-app
  { id: 201521942 }, // CaveDungeon
  { id: 220822569 }, // PatasTeam/GraphicAVLTree
  { id: 218893835 }, // dotfiles
  { id: 167217902 }, // CompetitiveProgramming
  {
    id: 252565333, // finite-automata-graph
    onlineDemo: 'https://mariojim.github.io/finite-automata-graph/',
  },
  {
    id: 259530650, // grammar-parsing-tree
    onlineDemo: 'https://mariojim.github.io/grammar-parsing-tree/',
  },
  { id: 172366859, onlineDemo: 'https://mariojim.github.io/mTouch/' }, // mTouch
  { id: 245031161 }, // KevinTMtz/GunnedDown
  { id: 282499927 }, // memory_admin_simulator
  { id: 255437430 }, // finite-automata-tui
];
