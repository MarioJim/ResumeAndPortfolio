import React from 'react';
import 'minireset.css';
import 'animate.css';

import Header from '../components/Header';
import { Root, Wrapper } from '../components/Layout';
import Projects from '../components/Projects';
import SEO from "../components/SEO";
import SideInfo from '../components/SideInfo';

const ProjectsPage = () => (
  <Root>
    <SEO />
    <Header />
    <Wrapper>
      <SideInfo />
      <Projects />
    </Wrapper>
  </Root>
);

export default ProjectsPage;