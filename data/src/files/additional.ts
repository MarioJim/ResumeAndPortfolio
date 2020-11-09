export interface AdditionalProject {
  title: string;
  date: string;
  location: string;
  points: string[];
}

export const additional: AdditionalProject[] = [
  {
    title: "Participated in ICPC's Gran Premio de México 2019",
    date: 'May, September 2019',
    location: 'Mexico City, Mexico',
    points: [
      'Expanded my algorithms and data structures knowledge while applying it to many different problems',
      'Wrote mainly C++ but also learned the basics of C and Python',
    ],
  },
  {
    title: "First place on Banorte's Challenge at HackMTY 2019",
    date: 'August 2019',
    location: 'Monterrey, Mexico',
    points: [
      'Developed an Android app prototype that accurately blocks phishing links and ads',
      "Competed against about 100 teams in Mexico's largest student hackathon",
    ],
  },
];
