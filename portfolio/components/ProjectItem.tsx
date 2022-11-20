import type { ProjectData } from '../lib/fetch-projects';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/project_item.module.scss';

const ProjectItem = ({
  image,
  title,
  owner,
  description,
  url,
  website,
  tags,
}: ProjectData) => (
  <div className={styles.projectItem}>
    <Link className={styles.itemCard} href={url}>
      <Image src={image} alt={`${title} repo image`} width={480} height={240} />
      <h3>
        {owner && `${owner} / `}
        {title}
      </h3>
      <p>{description}</p>
      <ul className={styles.tags}>
        {tags.map((tag, i) => (
          <li key={`${title}_${i}`}>{tag}</li>
        ))}
      </ul>
    </Link>
    {website && (
      <Link className={styles.onlineDemoBtn} href={website}>
        Check it out
        <br /> online!
      </Link>
    )}
  </div>
);

export default ProjectItem;
