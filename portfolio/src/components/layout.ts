import styled from '@emotion/styled';
import * as colors from '../styles/colors';
import * as fonts from '../styles/fonts';

export const Root = styled.div`
  min-height: calc(100vh - 60px);
  font-family: ${fonts.name}, sans-serif;
  font-weight: ${fonts.regular};
  background-color: ${colors.background};
  color: ${colors.font};
`;

const BasicWrapper = styled.div`
  margin: 60px auto 0 auto;
  padding: 20px 40px;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 500px) {
    padding: 20px 8vw;
  }
`;

export const Wrapper = styled(BasicWrapper)`
  display: grid;
  grid-template-columns: 30% 70%;

  @media (max-width: 840px) {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ProjectWrapper = styled(BasicWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.2em;
  margin-bottom: 10px;
`;