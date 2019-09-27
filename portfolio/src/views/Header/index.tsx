import React from 'react';
import { Wrapper, Center, StyledLink, Separator } from './styles';

const Header: React.FC = () => (
  <Wrapper>
    <Center>
      <StyledLink exact to="/"  activeClassName="active">about me</StyledLink>
      <Separator>/</Separator>
      <StyledLink to="/projects" activeClassName="active">projects</StyledLink>
    </Center>
  </Wrapper>
);

export default Header;
