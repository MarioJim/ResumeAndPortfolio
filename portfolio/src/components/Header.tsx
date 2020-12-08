import React from 'react';
import styled from '@emotion/styled';
import HeaderLink from './HeaderLink';
import * as colors from '../styles/colors';
import * as fonts from '../styles/fonts';

const Wrapper = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background-color: ${colors.header};

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Separator = styled.div`
  margin: 0 30px;
  font-size: 1.2em;
  font-weight: ${fonts.bold};

  @media (max-width: 500px) {
    margin: 0 6vw;
  }
`;

const Header: React.FC = () => (
  <Wrapper>
    <Center>
      <HeaderLink to="/" partiallyActive={false}>
        about me
      </HeaderLink>
      <Separator>/</Separator>
      <HeaderLink to="/resume">resume</HeaderLink>
      <Separator>/</Separator>
      <HeaderLink to="/projects">projects</HeaderLink>
    </Center>
  </Wrapper>
);

export default Header;
