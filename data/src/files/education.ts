export interface School {
  schoolName: string;
  title: string;
  date: string;
  location: string;
  points: string[];
}

export const schools: School[] = [
  {
    schoolName: 'Tec de Monterrey CCM',
    title: 'B.S. Computer Science and Technology',
    date: 'Aug 2018 - Exp. Jul 2022',
    location: 'Mexico City, Mexico',
    points: [
      'Currently in my fifth semester',
      'Major GPA: 96/100',
      'Participated as a teaching assistant on our Competitive Programming Club for a year',
      'Relevant coursework: Object-Oriented Programming, Data Structures, Databases, Operating Systems, Analysis and Design of Algorithms, Programming Languages, Advanced Database Systems',
    ],
  },
];
