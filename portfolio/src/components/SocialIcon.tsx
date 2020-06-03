import React from 'react';
import { SocialLink } from 'data';
import styled from '@emotion/styled';

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
  const { link, title, icon: Icon } = socialLink;
  return (
    <StyledLink target="_blank" href={link} title={title}>
      <Icon size="2x" />
    </StyledLink>
  );
}

export default SocialIcon;
