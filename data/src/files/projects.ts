export interface Project {
  title: string
  subtitle: string
  date: string
  points: string[]
  link: string
  includeInCV: boolean
}

export const projects: Project[] = [
  {
    title: 'Resume and Portfolio',
    subtitle: 'LaTeX pdf and React App compiled from the same database',
    date: 'Since third semester',
    points: [
      'Wrote TypeScript packages for compiling the data to a static React website and to .tex files',
      'Controlled with a shell script that builds both projects starting from a fresh git clone',
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
  {
    title: 'Knocki App mockup',
    subtitle: 'Port of my Design Fundament\'s final project to React + TypeScript',
    date: 'Summer 2019',
    points: [
      'Built using Create React App and Redux',
      'Written in TypeScript to improve readability through type checking',
      'Uploaded and hosted on a Heroku server',
    ],
    link: 'https://github.com/MarioJim/knocki-app',
    includeInCV: true,
  },
];

export const allowedRepos: number[] = [
  206996709, // ResumeAndPortfolio
  207170678, // mariojim.github.io
  196892751, // knocki-app
  201521942, // CaveDungeon
  220822569, // PatasTeam/GraphicAVLTree
  218893835, // dotfiles
  167217902, // CompetitiveProgramming
  252565333, // finite-automata-graph
  259530650, // grammar-parsing-tree
  172366859, // mTouch
  245031161, // KevinTMtz/GunnedDown
];
