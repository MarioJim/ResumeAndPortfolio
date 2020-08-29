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
`;

const Header: React.FC = () => (
  <Wrapper>
    <Center>
      <HeaderLink to="/" title="about me" partiallyActive={false} />
      <Separator>/</Separator>
      <HeaderLink to="/resume" title="resume" />
      <Separator>/</Separator>
      <HeaderLink to="/projects" title="projects" />
    </Center>
  </Wrapper>
);

export default Header;
