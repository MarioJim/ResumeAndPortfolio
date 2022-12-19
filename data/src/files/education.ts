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
    date: 'August 2018 - December 2022',
    location: 'Mexico',
    points: [
      "Graduated Magna Cum Laude, with a 97/100 GPA and an award by CENEVAL's national exam",
      'Relevant coursework: Analysis and Design of Algorithms, Mobile Application Development, Advanced Database Systems, Web Applications Development, Software Design and Architecture, Compiler Design',
    ],
  },
];
