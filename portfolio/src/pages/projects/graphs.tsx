import React from 'react';
import 'minireset.css';

import Header from '../../components/Header';
import { Root, ProjectWrapper, Title } from '../../components/Layout';
import SEO from '../../components/SEO';
import sketch from '../../projects/GraphAlgs';
import P5Wrapper from '../../components/P5Wrapper';

const Graphs: React.FC = () => (
  <Root>
    <SEO />
    <Header />
    <ProjectWrapper>
      <Title>Graph Algorithms</Title>
      <P5Wrapper sketch={sketch} />
    </ProjectWrapper>
  </Root>
);

export default Graphs;
