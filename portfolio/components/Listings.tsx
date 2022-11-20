import type { AdditionalProject, School, Experience, Skill } from 'data';
import styles from '../styles/listings.module.scss';

export const AdditionalListing = ({
  title,
  date,
  points,
  location,
}: AdditionalProject) => (
  <div className={styles.listing}>
    <h2>{title}</h2>
    <br />
    <p className={styles.date}>{date}</p>
    <p className={styles.location}>{location}</p>
    <ul>
      {points.map((point, key) => (
        <li key={key}>{point}</li>
      ))}
    </ul>
  </div>
);

export const EducationListing = ({
  title,
  schoolName,
  date,
  location,
  points,
}: School) => (
  <div className={styles.listing}>
    <h2>{title}</h2>
    <h3>{schoolName}</h3>
    <p className={styles.date}>{date}</p>
    <p className={styles.location}>{location}</p>
    <ul>
      {points.map((point, key) => (
        <li key={key}>{point}</li>
      ))}
    </ul>
  </div>
);

export const ExperienceListing = ({
  title,
  workPlace,
  date,
  location,
  points,
}: Experience) => (
  <div className={styles.listing}>
    <h2>{title}</h2>
    <h3>{workPlace}</h3>
    <p className={styles.date}>{date}</p>
    <p className={styles.location}>{location}</p>
    <ul>
      {points.map((point, key) => (
        <li key={key}>{point}</li>
      ))}
    </ul>
  </div>
);

export const SkillListing = ({ title, points }: Skill) => (
  <div className={styles.skillsListing}>
    <h3>{title}</h3>
    <p>{points}</p>
  </div>
);
