import styled from 'styled-components';
import * as colors from '../styles/colors';

export const Root = styled.div`
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${colors.background};
  color: ${colors.font};
`;

export const Wrapper = styled.div`
  margin: 50px auto 0 auto;
  padding: 40px;
  max-width: 960px;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;

  @media (max-width: 820px) {
    display: block;
  }
`;
