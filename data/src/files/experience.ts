export interface Experience {
  workPlace: string;
  title: string;
  date: string;
  location: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    workPlace: 'Google',
    title: 'Software Engineering Intern',
    date: 'June - August 2022',
    location: 'Mountain View, CA',
    points: [
      'Worked with the Flutter team in their efforts of supporting internal services on new desktop applications',
      'Implemented a Flutter plugin for storing and uploading logs in first-party desktop Google apps using bidirectional communication through method channels between the plugin API (Dart) and its implementation (Objective-C for MacOS and C++ for Windows)',
      "Introduced a large scale change (~100 files) in BUILD rules across Google's monorepo in order to improve the dependency check used to verify that Flutter applications correctly import plugins",
    ],
  },
  {
    workPlace: 'Meta',
    title: 'Software Engineering Intern',
    date: 'January - March 2022',
    location: 'Remote',
    points: [
      "Worked with the Unigraph team (Infra pillar), responsible for managing code size around Meta's products",
      'Rewrote an algorithm in charge of traversing and topologically sorting a 100,000-node graph using Rust, reducing its execution time from ~18s to ~750ms',
    ],
  },
  {
    workPlace: 'Microsoft',
    title: 'Software Engineering Intern',
    date: 'June - August 2021',
    location: 'Remote',
    points: [
      'Worked on the Field Service Mobile team from the Dynamics 365 division',
      'Participated in the creation of a simple feature of the FS app, from its conception, design, documentation, implementation and testing',
      'Developed and modified TypeScript modules used in React Native applications or in a web context',
      'Built an audio recording pipeline from recording an audio stream and encoding it using the Android NDK (C++)',
    ],
  },
  {
    workPlace: 'Grupo Financiero Banorte',
    title: 'Cybersecurity Intern',
    date: 'January - July 2020',
    location: 'Mexico City, Mexico',
    points: [
      'Built and deployed a dashboard to help assess cybersecurity risks that affect the institution in a day-to-day basis',
      'Created several graph and hierarchy visualizations rendered with the help of React and D3.js',
      'Developed Python scripts to clean and transform the data from Excel spreadsheets to a variety of JSON and CSV files for easier use in the web app',
      'Had a hands-on experience on how companies defend their assets against malware and other cyber-threats',
    ],
  },
];
