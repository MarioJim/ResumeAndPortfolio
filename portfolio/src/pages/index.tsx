import React from 'react';
import 'minireset.css';
import 'animate.css';

import About from '../components/About';
import Header from '../components/Header';
import { Root, Wrapper } from '../components/Layout';
import SEO from "../components/SEO";
import SideInfo from '../components/SideInfo';

const IndexPage = () => (
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
