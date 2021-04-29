import React from 'react';
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
  title: string;
  link: string;
  protocol: string;
}

const SocialIcon: React.FC<Props> = ({ title, link, protocol, children }) => (
  <StyledLink
    target="_blank"
    rel="noopener"
    href={protocol + link}
    title={title}
  >
    {children}
    <p>{link}</p>
  </StyledLink>
);

export default SocialIcon;
