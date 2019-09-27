import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const StyledRoot = styled.div`
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${colors.background};
  color: ${colors.font};
`;

export const Wrapper = styled.div`
  margin: 50px auto 0 auto;
  padding: 40px 0;
  max-width: 960px;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
`;
