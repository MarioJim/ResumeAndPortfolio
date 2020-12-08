import { additional, experiences, projects, schools, skills } from 'data';

import {
  cventryTemplate,
  cvsectionTemplate,
  cvskillSectionTemplate,
  cvskillTemplate,
  cvsummarySectionTemplate,
} from './templates';

export const additionalSection: string = cvsectionTemplate(
  'Additional Experience and Awards',
  additional.map(({ date, location, points, title }) =>
    cventryTemplate(location, title, date, '', points),
  ),
);

export const educationSection: string = cvsectionTemplate(
  'Education',
  schools.map(({ date, location, points, schoolName, title }) =>
    cventryTemplate(schoolName, title, date, location, points),
  ),
);

export const experienceSection: string = cvsectionTemplate(
  'Work Experience',
  experiences.map(({ date, location, points, title, workPlace }) =>
    cventryTemplate(workPlace, title, date, location, points),
  ),
);

export const projectsSection: string = cvsectionTemplate(
  'Software Projects',
  projects.map(({ date, link, points, subtitle, title }) =>
    cventryTemplate(
      subtitle,
      title,
      date,
      link.replace('https://github.com', '\\faGithub'),
      points,
    ),
  ),
);

export const skillsSection: string = cvskillSectionTemplate(
  skills.map(({ points, title }) =>
    cvskillTemplate(title.replace('&', '\\&'), points),
  ),
);

export const summarySection: string = cvsummarySectionTemplate('');
