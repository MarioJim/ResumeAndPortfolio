export interface School {
  schoolName: string
  title: string
  date: string
  location: string
  points: string[]
}

export const schools: School[] = [
  {
    schoolName: 'Tec de Monterrey CCM',
    title: 'B.S. Computer Science and Technology',
    date: 'Aug 2018 - Exp. Dec 2022',
    location: 'Mexico City, Mexico',
    points: [
      'Currently in my third semester',
      'Participated as a TA on our Competitive Programming Club',
      'Relevant courses: Data Structures',
      'Major GPA: 3.9'
    ],
  }
];
