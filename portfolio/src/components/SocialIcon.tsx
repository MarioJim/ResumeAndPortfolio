import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
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
  link_base: string;
  link_protocol: string;
  icon: IconType;
}

const SocialIcon: React.FC<Props> = ({
  title,
  link_base,
  link_protocol,
  icon: Icon,
}) => (
  <StyledLink
    target="_blank"
    href={link_protocol + link_base}
    title={title}
    rel="noopener"
  >
    <Icon size="2.3em" />
    <p>{link_base}</p>
  </StyledLink>
);

export default SocialIcon;
