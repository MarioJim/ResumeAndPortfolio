export interface Experience {
  workPlace: string;
  title: string;
  date: string;
  location: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    workPlace: 'Facebook',
    title: 'Incoming Software Engineering Intern',
    date: 'Winter 2022',
    location: 'Remote',
    points: [],
  },
  {
    workPlace: 'Microsoft',
    title: 'Incoming Software Engineering Intern',
    date: 'Summer 2021',
    location: 'Remote',
    points: [],
  },
  {
    workPlace: 'Grupo Financiero Banorte',
    title: 'Cybersecurity Intern',
    date: 'Jan 2020 - Jul 2020',
    location: 'Mexico City, Mexico',
    points: [
      'Built and deployed a dashboard to help assess cybersecurity risks that affect the institution in a day-to-day basis',
      'Created several graph and hierarchy visualizations rendered with the help of React and D3.js',
      'Developed Python scripts to clean and transform the data from Excel spreadsheets to a variety of JSON and CSV files for easier use in the web app',
      'Had a hands-on experience on how companies defend their assets against malware and other cyber-threats',
    ],
  },
];
