import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface SocialLink {
  link: string
  title: string
  icon: React.SFC<Partial<FontAwesomeIconProps>>
}

const socialLinks: SocialLink[] = [
  {
    title: 'Resume',
    link: 'resume.pdf',
    icon: props => <FontAwesomeIcon {...props} icon={faAddressCard} />,
  },
];

interface Profile {
  name: string
  description: string
  phone: string
  mail: string
  github: string
  socialLinks: SocialLink[]
}

const mail = 'mario.emilio.j@gmail.com';
const github = 'MarioJim';

export const myProfile: Profile = {
  name: 'Mario Jiménez',
  description: 'Computer Science Student',
  phone: '(+52) 961 2096280',
  mail,
  github,
  socialLinks: [
    {
      title: 'Email',
      link: `mailto:${mail}`,
      icon: props => <FontAwesomeIcon {...props} icon={faEnvelope} />,
    },
    {
      title: 'GitHub',
      link: `https://github.com/${github}/`,
      icon: props => <FontAwesomeIcon {...props} icon={faGithub} />,
    },
    ...socialLinks,
  ],
};
