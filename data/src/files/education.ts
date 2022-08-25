export interface School {
  schoolName: string;
  title: string;
  date: string;
  location: string;
  points: string[];
}

export const schools: School[] = [
  {
    schoolName: 'Tecnológico de Monterrey',
    title: 'B.S. Computer Science and Technology',
    date: 'Aug 2018 - Exp. Dec 2022',
    location: 'Mexico',
    points: [
      'Currently studying my 9th and last semester, 97/100 GPA',
      'Relevant coursework: Analysis and Design of Algorithms, Mobile Application Development, Advanced Database Systems, Web Applications Development, Software Design and Architecture, Compiler Design',
    ],
  },
];
