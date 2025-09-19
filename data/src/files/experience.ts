export interface Experience {
  workPlace: string;
  title: string;
  date: string;
  location: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    workPlace: 'Google',
    title: 'Software Engineer III',
    date: 'May 2025 - Current',
    location: 'Sunnyvale, CA',
    points: [
      'Working in the Borg team, the internal orchestration framework that manages almost all tasks at Google',
      'Contributing to efforts of virtualizing workloads for multiple use cases, such as running untrusted code or opaque binaries, sandboxing tasks from possible attack vectors from the host or other tasks, and sharing available compute capacity between internal and external users',
    ],
  },
  {
    workPlace: 'Google',
    title: 'Software Engineer II',
    date: 'April 2023 - May 2025',
    location: 'New York City, NY',
    points: [
      "Worked in the Developer Journeys and Solutions team, in charge of Google's CMS for documentation, along with efforts to understand developer's workflows and behaviors",
      'Designed and implemented a Go-based service responsible of updating an eventually consistent data source serving metadata for documentation sites across Google (XMs of pages). The service efficiently handles X00 writes/second, while maintaining a minimal 11% overhead over raw SQL statements',
      'Contributed to the development and launch of an executive-facing internal dashboard, utilizing data insights derived from Google product utilization by developers. Implemented key backend features, designed and integrated frontend chart visualizations, and established ETL pipelines to support data-driven decisions at leadership level',
    ],
  },
  {
    workPlace: 'Google',
    title: 'Software Engineering Intern',
    date: 'June - August 2022',
    location: 'Mountain View, CA',
    points: [
      'Worked with the Flutter team in their efforts of supporting internal services on new desktop applications',
      "Implemented a Flutter plugin for storing and uploading logs in first-party desktop apps using bidirectional communication through method channels between the plugin's API (Dart) and its implementation (Objective-C/C++)",
      "Introduced a large scale change (~100 files) in BUILD rules across Google's monorepo in order to improve the dependency check used to verify that Flutter applications correctly import plugins",
    ],
  },
  {
    workPlace: 'Meta',
    title: 'Software Engineering Intern',
    date: 'January - March 2022',
    location: 'Remote',
    points: [
      "Worked with the Unigraph team (Infra pillar), responsible for managing code size around Meta's products",
      'Rewrote an algorithm in charge of traversing and topologically sorting a 100,000-node graph using Rust, reducing its execution time from ~18s to ~750ms',
    ],
  },
  {
    workPlace: 'Microsoft',
    title: 'Software Engineering Intern',
    date: 'June - August 2021',
    location: 'Remote',
    points: [
      'Worked on the Field Service Mobile team from the Dynamics 365 division',
      'Participated in the creation of a simple feature on the Field Service app, from gathering requirements and an initial design, through its implementation, documentation and testing using TypeScript and React Native',
      'Built an audio recording pipeline from recording an audio stream and encoding it using the Android NDK (C++)',
    ],
  },
];
