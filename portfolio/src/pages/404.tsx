import React from 'react';
import styled from '@emotion/styled';
import 'minireset.css';

import Header from '../components/Header';
import { Root, Wrapper } from '../components/Layout';
import SEO from "../components/SEO";
import SideInfo from '../components/SideInfo';
import * as fonts from '../styles/fonts';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title1 = styled.h3`
  font-size: 3em;
  font-weight: ${fonts.bold};
`;

const Title2 = styled.h3`
  font-size: 2.2em;
  font-weight: ${fonts.light};
`;

const Description = styled.p`
  font-size: 1.6em;
  font-weight: ${fonts.light};
`;

const NotFoundPage = () => (
  <Root>
    <SEO title="404: Not found" />
    <Header />
    <Wrapper>
      <SideInfo />
      <InnerWrapper>
        <Title1>404</Title1>
        <Title2>Not found</Title2>
        <Description>You just hit a route that doesn't exist...</Description>
      </InnerWrapper>
    </Wrapper>
  </Root>
);

export default NotFoundPage;
