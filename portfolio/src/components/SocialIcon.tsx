import React from 'react';
import styled from 'styled-components';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLink = styled.a`
  color: white;
  opacity: 0.8;
  margin: 0 10px;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

interface Props {
  socialLink: any
}

const SocialIcon: React.FC<Props> = ({ socialLink }) => {
  const { link, title, icon } = socialLink;
  const iconDef = findIconDefinition(icon);
  return (
    <StyledLink target="_blank" href={link} title={title}>
      <FontAwesomeIcon icon={iconDef} size="2x" />
    </StyledLink>
  );
}

export default SocialIcon;
