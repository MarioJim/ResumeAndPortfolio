import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as colors from '../../styles/colors';
import * as fonts from '../../styles/fonts';

export const Wrapper = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background-color: ${colors.header};
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(NavLink)<{ activeClassName: string }>`
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;

  &.${props => props.activeClassName} {
    font-weight: ${fonts.bold};
  }
`;

export const Separator = styled.div`
  margin: 0 30px;
  font-size: 20px;
  font-weight: ${fonts.bold};
`;
