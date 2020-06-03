export interface Experience {
  workPlace: string
  title: string
  date: string
  location: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    workPlace: 'Grupo Financiero Banorte',
    title: 'Cybersecurity intern',
    date: 'Jan 2020 - Jul 2020',
    location: 'Mexico City, Mexico',
    points: [
      'Helped build a tool to assess cybersecurity risks that affect the institution in a day to day basis',
      'Calculated the possible threats through vulnerability and probability analysis',
      'Had a hands on experience on how companies defend themselves against hackers and other cyber-threats',
    ],
  },
];
