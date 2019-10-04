import React from 'react';
import { SocialLink } from 'data';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLink = styled.a`
  color: white;
  opacity: 0.8;
  margin: 0 10px;
  transition: opacity 0.2s ease-in-out;
  &:hover { opacity: 1; }
`;

interface Props {
  socialLink: SocialLink
}

const SocialIcon: React.FC<Props> = ({ socialLink }) => {
  const { link, title, icon } = socialLink;
  return (
    <StyledLink target="_blank" href={link} title={title}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </StyledLink>
  );
}

export default SocialIcon;
