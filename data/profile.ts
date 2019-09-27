import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface SocialLink {
  link: string
  title: string
  icon: IconProp
}

export const SocialLinks: SocialLink[] = [
  {
    title: 'Email',
    link: 'mailto:mario.emilio.j@gmail.com',
    icon: faEnvelope,
  },
  {
    title: 'GitHub',
    link: 'https://github.com/MarioJim/',
    icon: faGithub,
  },
  {
    title: 'Resume',
    link: '', // TODO: Add resume link
    icon: faAddressCard,
  }
];

interface Profile {
  name: string
  description: string
  socialLinks: SocialLink[]
}

export const myProfile: Profile = {
  name: 'Mario Jiménez',
  description: 'Computer Science Student',
  socialLinks: SocialLinks,
}
