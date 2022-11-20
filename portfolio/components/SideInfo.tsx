import type { SideInfoRequest } from '../lib/fetch-sideinfo';
import { myProfile } from 'data';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/side_info.module.scss';

interface SocialIconProps {
  title: string;
  link: string;
  protocol: string;
  children: React.ReactNode;
}

const SocialIcon = ({ title, link, protocol, children }: SocialIconProps) => (
  <Link
    target="_blank"
    rel="noreferrer"
    href={protocol + link}
    title={title}
    className={styles.socialIcon}
  >
    {children}
    <p>{link}</p>
  </Link>
);

const SideInfo = ({ avatarUrl, bio }: SideInfoRequest) => {
  const { name, mail, github, linkedin } = myProfile;
  return (
    <div className={styles.sideInfo}>
      <Image
        src={avatarUrl}
        alt="Profile picture"
        width="200"
        height="200"
        priority
      />
      <h1>{name}</h1>
      <p>{bio}</p>
      <div>
        <SocialIcon title="Email" protocol="mailto:" link={mail}>
          <FaEnvelope size="2.3em" />
        </SocialIcon>
        <SocialIcon title="GitHub" protocol="https://" link={github}>
          <FaGithub size="2.3em" />
        </SocialIcon>
        <SocialIcon title="LinkedIn" protocol="https://" link={linkedin}>
          <FaLinkedin size="2.3em" />
        </SocialIcon>
      </div>
    </div>
  );
};

export default SideInfo;
