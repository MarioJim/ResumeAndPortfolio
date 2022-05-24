import React from 'react';
import { GetStaticProps } from 'next';
import 'animate.css';

import About from '../components/About';
import Header from '../components/Header';
import { Root, Wrapper } from '../components/layout';
import SEO from '../components/SEO';
import SideInfo from '../components/SideInfo';
import { fetchSideInfoRequest, SideInfoRequest } from '../lib/sideinfo-request';

interface IndexPageProps {
  sideInfoReq: SideInfoRequest;
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => ({
  props: {
    sideInfoReq: await fetchSideInfoRequest(),
  },
});

const IndexPage = ({ sideInfoReq }: IndexPageProps) => (
  <Root>
    <SEO />
    <Header />
    <Wrapper>
      <SideInfo req={sideInfoReq} />
      <About />
    </Wrapper>
  </Root>
);

export default IndexPage;
