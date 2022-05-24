import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import HeaderLink from './HeaderLink';
import theme from '../styles/theme';

const Wrapper = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background-color: ${theme.colors.header};

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
  font-weight: ${theme.fonts.bold};

  @media (max-width: 500px) {
    margin: 0 6vw;
  }
`;

const Header = () => {
  const { asPath } = useRouter();
  return (
    <Wrapper>
      <Center>
        <HeaderLink href="/" currentUrl={asPath}>
          about me
        </HeaderLink>
        <Separator>/</Separator>
        <HeaderLink href="/resume" currentUrl={asPath}>
          resume
        </HeaderLink>
        <Separator>/</Separator>
        <HeaderLink href="/projects" currentUrl={asPath}>
          projects
        </HeaderLink>
      </Center>
    </Wrapper>
  );
};

export default Header;
