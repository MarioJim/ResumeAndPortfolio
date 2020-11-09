import React from 'react';
import 'animate.css';

import About from '../components/About';
import Header from '../components/Header';
import { Root, Wrapper } from '../components/Layout';
import SEO from '../components/SEO';
import SideInfo from '../components/SideInfo';

const IndexPage: React.FC = () => (
  <Root>
    <SEO />
    <Header />
    <Wrapper>
      <SideInfo />
      <About />
    </Wrapper>
  </Root>
);

export default IndexPage;
