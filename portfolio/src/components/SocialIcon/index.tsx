import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLink } from 'data';
import { StyledLink } from './styles';

interface Props {
  socialLink: SocialLink
}

const SocialIcon: React.FC<Props> = ({ socialLink }) => {
  const { title, link, icon } = socialLink;
  return (
    <StyledLink target="_blank" href={link} title={title}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </StyledLink>
  );
}

export default SocialIcon;
