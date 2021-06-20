import React from 'react';
import { GetStaticProps } from 'next';
import styled from '@emotion/styled';

import Header from '../components/Header';
import { Root, Wrapper } from '../components/layout';
import SEO from '../components/SEO';
import SideInfo from '../components/SideInfo';
import { fetchSideInfoRequest, SideInfoRequest } from '../lib/sideinfo-request';
import theme from '../styles/theme';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title1 = styled.h3`
  font-size: 3em;
  font-weight: ${theme.fonts.bold};
`;

const Title2 = styled.h3`
  font-size: 2.2em;
  font-weight: ${theme.fonts.light};
`;

const Description = styled.p`
  font-size: 1.6em;
  font-weight: ${theme.fonts.light};
`;

interface NotFoundPageProps {
  sideInfoReq: SideInfoRequest;
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    sideInfoReq: await fetchSideInfoRequest(),
  },
});

const NotFoundPage: React.FC<NotFoundPageProps> = ({ sideInfoReq }) => (
  <Root>
    <SEO title="404: Not found" />
    <Header />
    <Wrapper>
      <SideInfo req={sideInfoReq} />
      <InnerWrapper>
        <Title1>404</Title1>
        <Title2>Not found</Title2>
        <Description>You just hit a route that doesn&apos;t exist...</Description>
      </InnerWrapper>
    </Wrapper>
  </Root>
);

export default NotFoundPage;
