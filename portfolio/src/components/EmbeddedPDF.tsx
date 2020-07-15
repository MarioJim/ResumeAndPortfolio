import React from 'react';
import styled from '@emotion/styled';

const StyledEmbed = styled.embed`
  position: relative;
  display: block;
  width: 100%;
  min-height: 800px;
  grid-column: 1 / span 2;
`;

interface Props {
  src: string;
}

const EmbeddedPDF: React.FC<Props> = ({ src }) => (
  <StyledEmbed type="application/pdf" src={src} width="920" height="800" />
);

export default EmbeddedPDF;
