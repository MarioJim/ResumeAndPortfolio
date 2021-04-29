import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '../styles/theme';

const StyledLink = styled.a<{ isActive: boolean }>`
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: ${(props) =>
    props.isActive ? theme.fonts.bold : theme.fonts.light};
`;

interface HeaderLinkProps {
  currentUrl: string;
  href: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  children,
  currentUrl,
  href,
}) => (
  <Link href={href} passHref>
    <StyledLink isActive={currentUrl === href}>{children}</StyledLink>
  </Link>
);

export default HeaderLink;
