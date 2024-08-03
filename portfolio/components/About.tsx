import { additional, experiences, schools, skills } from 'data';
import {
  AdditionalListing,
  EducationListing,
  ExperienceListing,
  SkillListing,
} from './Listings';
import styles from '../styles/about.module.scss';

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className='animate__animated animate__fadeInUp'>{children}</section>
);

const About = () => (
  <div className={styles.about}>
    <Section>
      <h2>Experience</h2>
      {experiences.map((exp, key) => (
        <ExperienceListing {...exp} key={key} />
      ))}
    </Section>
    <Section>
      <h2>Education</h2>
      {schools.map((school, key) => (
        <EducationListing {...school} key={key} />
      ))}
    </Section>
    <Section>
      <h2>Skills</h2>
      {skills.map((skill, key) => (
        <SkillListing {...skill} key={key} />
      ))}
    </Section>
    <Section>
      <h2>Additional Experience and Awards</h2>
      {additional.map((add, key) => (
        <AdditionalListing {...add} key={key} />
      ))}
    </Section>
  </div>
);

export default About;
