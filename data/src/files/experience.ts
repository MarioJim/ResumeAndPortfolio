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
    title: 'Incoming Software Engineer',
    date: 'April 2023',
    location: 'New York City, NY',
    points: ['Joining the DevSite Publishing Backend team'],
  },
  {
    workPlace: 'Scoville Co., Ltd.',
    title: 'Software Engineering Intern',
    date: 'January 2023',
    location: 'Tokyo, Japan',
    points: [
      'Collaborated in a team of 5 interns to research and develop author obfuscation techniques, which involved combining multiple NLP-based methods to conceal the stylometric identity of authors',
      'Developed a production-ready application using Flask and PostgreSQL to implement the backend, and utilized React and TypeScript to create a performant and scalable interface for calling these AI models',
    ],
  },
  {
    workPlace: 'Google',
    title: 'Software Engineering Intern',
    date: 'June - August 2022',
    location: 'Mountain View, CA',
    points: [
      'Worked with the Flutter team in their efforts of supporting internal services on new desktop applications',
      "Implemented a Flutter plugin for storing and uploading logs in first-party desktop apps using bidirectional communication through method channels between the plugin's API (Dart) and its implementation (Objective-C/C++)",
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
      'Participated in the creation of a simple feature on the Field Service app, from gathering requirements and an initial design, through its implementation, documentation and testing using TypeScript and React Native',
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
    ],
  },
];
