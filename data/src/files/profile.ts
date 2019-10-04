import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface SocialLink {
  link: string
  title: string
  icon: IconLookup
}

const socialLinks: SocialLink[] = [
  {
    title: 'Resume',
    link: 'resume.pdf',
    icon: faAddressCard,
  }
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
      icon: faEnvelope,
    },
    {
      title: 'GitHub',
      link: `https://github.com/${github}/`,
      icon: faGithub,
    },
    ...socialLinks,
  ]
}
