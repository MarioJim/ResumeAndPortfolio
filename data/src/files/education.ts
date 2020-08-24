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
      'Participated as a TA on our Competitive Programming Club for a year',
      'Relevant courses: OOP, Data Structures, Databases, Operating Systems',
      'Major GPA: 96/100',
    ],
  },
];
