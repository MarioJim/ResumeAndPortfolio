import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import * as fonts from '../styles/fonts';

const StyledLink = styled(Link)<{ activeClassName: string }>`
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2em;

  &.${props => props.activeClassName} {
    font-weight: ${fonts.bold};
  }
`;

interface HeaderLinkProps {
  to: string;
  title: string;
  partiallyActive?: boolean;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  to,
  title,
  partiallyActive = true,
}) => (
  <StyledLink
    to={to}
    activeClassName="active"
    partiallyActive={partiallyActive}
  >
    {title}
  </StyledLink>
);
export default HeaderLink;
