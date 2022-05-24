import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  grid-column: 1 / span 2;
  height: calc(100vh - 100px);
`;

const StyledIFrame = styled.iframe`
  width: 100%;
`;

const pdfURL = 'https://mariojim.github.io/mario_jimenez_resume.pdf';

const ResumeIFrame = () => (
  <Wrapper>
    <StyledIFrame
      src={`https://docs.google.com/viewer?url=${pdfURL}&embedded=true`}
      width="920"
      height="100%"
    />
  </Wrapper>
);

export default ResumeIFrame;
