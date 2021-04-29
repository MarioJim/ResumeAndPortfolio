import React from 'react';

import Header from '../components/Header';
import { Root, Wrapper } from '../components/layout';
import SEO from '../components/SEO';
import ResumeIFrame from '../components/ResumeIFrame';

const ResumePage: React.FC = () => (
  <Root>
    <SEO />
    <Header />
    <Wrapper>
      <ResumeIFrame />
    </Wrapper>
  </Root>
);

export default ResumePage;
