export interface Experience {
  workPlace: string;
  title: string;
  date: string;
  location: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    workPlace: 'Grupo Financiero Banorte',
    title: 'Cybersecurity intern',
    date: 'Jan 2020 - Jul 2020',
    location: 'Mexico City, Mexico',
    points: [
      'Built a dashboard to help assess cybersecurity risks that affect the institution in a day-to-day basis using React',
      'Created several graph and hierarchy visualizations rendered by D3.js',
      'Developed Python scripts to clean and transform the data from Excel spreadsheets to a variety of JSON and CSV files for easier use in the web app',
      'Had a hands-on experience on how companies defend themselves against malware and other cyber-threats',
    ],
  },
];
