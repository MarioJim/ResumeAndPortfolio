import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import * as colors from '../styles/colors';
import * as fonts from '../styles/fonts';

const Wrapper = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background-color: ${colors.header};
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)<{ activeClassName: string }>`
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;

  &.${props => props.activeClassName} {
    font-weight: ${fonts.bold};
  }
`;

const Separator = styled.div`
  margin: 0 30px;
  font-size: 20px;
  font-weight: ${fonts.bold};
`;

const Header: React.FC = () => (
  <Wrapper>
    <Center>
      <StyledLink to="/" activeClassName="active">about me</StyledLink>
      <Separator>/</Separator>
      <StyledLink to="/projects" activeClassName="active">projects</StyledLink>
    </Center>
  </Wrapper>
);

export default Header;
