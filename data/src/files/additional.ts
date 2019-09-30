export interface AdditionalProject {
  title: string
  date: string
  location: string
  points: string[]
}

export const additional: AdditionalProject[] = [
  {
    title: 'Participated in ICPC\'s Gran Premio de México 2019',
    date: 'May, September 2019',
    location: 'Mexico City, Mexico',
    points: [
      'First time competing in a programming contest',
      'Solved 6 problems during three events'
    ],
  },
  {
    title: 'First place on Banorte\'s Challenge at HackMTY 2019',
    date: 'August 2019',
    location: 'Monterrey, Mexico',
    points: [
      'Made an Android app prototype that accurately blocks phishing links and ads',
    ],
  },
  {
    title: 'Participated in HackMTY 2018',
    date: 'August 2018',
    location: 'Monterrey, Mexico',
    points: [
      'Created a Python script to scrape videogame store\'s prices',
      'Later, rewrote it entirely in Node.js',
    ],
  },
  {
    title: 'Attended a Processing.js course at University of Texas',
    date: 'Summer 2016',
    location: 'Dallas, Texas',
    points: [
      'Learned the basic syntax of JavaScript',
      'Used the p5.js library to create little animations'
    ],
  }
]
