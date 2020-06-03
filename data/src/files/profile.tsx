import React from 'react';
import { FaAddressCard, FaEnvelope, FaGithub } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons/lib/cjs';

export interface SocialLink {
  link: string
  title: string
  icon: React.SFC<IconBaseProps>
}

const socialLinks: SocialLink[] = [
  {
    title: 'Resume',
    link: 'resume.pdf',
    icon: props => <FaAddressCard {...props} />,
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
      icon: props => <FaEnvelope {...props} />,
    },
    {
      title: 'GitHub',
      link: `https://github.com/${github}/`,
      icon: props => <FaGithub {...props} />,
    },
    ...socialLinks,
  ],
};
