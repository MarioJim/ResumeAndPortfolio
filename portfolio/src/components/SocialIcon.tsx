import React from 'react';
import { SocialLink } from 'data';
import styled from '@emotion/styled';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 0;
  color: white;
  opacity: 0.8;
  margin: 0 10px;
  transition: opacity 0.15s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

interface Props {
  socialLink: SocialLink;
}

const SocialIcon: React.FC<Props> = ({ socialLink }) => {
  const { link, title, icon: Icon } = socialLink;
  const cleanTitle = link.startsWith('http')
    ? link.split('//')[1]
    : link.split(':')[1];
  return (
    <StyledLink target="_blank" href={link} title={title} rel="noopener">
      <Icon size="2.3em" />
      <p>{cleanTitle}</p>
    </StyledLink>
  );
};

export default SocialIcon;
