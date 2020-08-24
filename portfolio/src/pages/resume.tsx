import React from 'react';
import 'minireset.css';
import 'animate.css';

import Header from '../components/Header';
import { Root, Wrapper } from '../components/Layout';
import SEO from '../components/SEO';
import EmbeddedPDF from '../components/EmbeddedPDF';

const ResumePage: React.FC = () => (
  <Root>
    <SEO />
    <Header />
    <Wrapper>
      <EmbeddedPDF src="/resume.pdf" />
    </Wrapper>
  </Root>
);

export default ResumePage;