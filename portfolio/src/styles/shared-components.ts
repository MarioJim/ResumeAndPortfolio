import styled from 'styled-components';
import * as fonts from './fonts';
import * as colors from  './colors';

export const Title = styled.h2`
  font-size: 1.4em;
  font-weight: ${fonts.bold};

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -57px;
    border: 5px solid ${colors.background};
    box-sizing: border-box;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.2em;
  font-weight: ${fonts.bold};
`;

export const Date = styled.p`
  float: right;
  font-size: 0.9em;
`;

export const Points = styled.ul`
  list-style: inside circle;
  padding-left: 20px;
`;
