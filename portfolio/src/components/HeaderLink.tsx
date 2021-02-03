import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import * as fonts from '../styles/fonts';

const StyledLink = styled(Link)<{ activeClassName: string }>`
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: ${fonts.light};

  &.${(props) => props.activeClassName} {
    font-weight: ${fonts.bold};
  }
`;

interface HeaderLinkProps {
  to: string;
  partiallyActive?: boolean;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  children,
  partiallyActive = true,
  to,
}) => (
  <StyledLink
    to={to}
    activeClassName="active"
    partiallyActive={partiallyActive}
  >
    {children}
  </StyledLink>
);

export default HeaderLink;
