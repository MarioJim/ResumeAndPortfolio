export interface AdditionalProject {
  title: string;
  date: string;
  location: string;
  points: string[];
}

export const additional: AdditionalProject[] = [
  {
    title: "First place in Banorte's Challenge at HackMTY 2019",
    date: 'August 2019',
    location: 'Monterrey, Mexico',
    points: [
      'Developed an Android app prototype that accurately blocks phishing links and ads',
      "Competed against about 100 teams in Mexico's largest student hackathon",
    ],
  },
];
