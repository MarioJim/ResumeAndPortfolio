import styled from 'styled-components';
import * as colors from '../../styles/colors';
import * as fonts from '../../styles/fonts';

export const StyledWrapper = styled.div`
  margin-left: 30px;
  border-left: 6px solid white;
  padding-left: 44px;
`;

export const Section = styled.section`
  position: relative;
  margin-bottom: 48px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: ${fonts.bold};

  &:before {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -62px;
    top: 8px;
    border: 7px solid ${colors.background};
    box-sizing: border-box;
  }
`;
