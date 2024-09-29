import { additional, experiences, schools, skills } from 'data';
import {
  AdditionalListing,
  EducationListing,
  ExperienceListing,
  SkillListing,
} from './Listings';
import styles from '../styles/about.module.scss';

const About = () => (
  <div className={styles.about}>
    <section>
      <h2>Experience</h2>
      {experiences.map((exp, key) => (
        <ExperienceListing {...exp} key={key} />
      ))}
    </section>
    <section>
      <h2>Education</h2>
      {schools.map((school, key) => (
        <EducationListing {...school} key={key} />
      ))}
    </section>
    <section>
      <h2>Skills</h2>
      {skills.map((skill, key) => (
        <SkillListing {...skill} key={key} />
      ))}
    </section>
    <section>
      <h2>Additional Experience and Awards</h2>
      {additional.map((add, key) => (
        <AdditionalListing {...add} key={key} />
      ))}
    </section>
  </div>
);

export default About;
