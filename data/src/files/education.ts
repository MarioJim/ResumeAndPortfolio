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
      'Currently in my sixth semester, with a GPA of 96/100',
      'Participated as a teaching assistant on our Competitive Programming Club for a year',
      'Relevant coursework: Data Structures, Operating Systems, Analysis and Design of Algorithms, Programming Languages, Advanced Database Systems, Web Applications Development, Software Quality and Testing',
    ],
  },
];
