import styled from '@emotion/styled';

import theme from '../styles/theme';

export const Wrapper = styled.div`
  margin-bottom: 22px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 1.4em;
  font-weight: ${theme.fonts.regular};
  margin: 6px 0;
  display: inline-block;

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -54px;
    top: 14px;
    border: 5px solid ${theme.colors.background};
    box-sizing: border-box;

    @media (max-width: 820px) {
      content: none;
    }
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.1em;
  font-weight: ${theme.fonts.regular};
  margin-bottom: 8px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  border-bottom: 2px dashed #ffffffc0;
  padding-bottom: 1px;
`;

export const Date = styled.p`
  float: right;
  margin-left: 10px;

  @media (max-width: 820px) {
    float: unset;
  }
`;

export const Location = styled.p`
  margin-bottom: 6px;
`;

export const Points = styled.ul`
  list-style: inside circle;
  margin: 5px 0;
  padding-left: 20px;
`;

export const Point = styled.li`
  font-weight: ${theme.fonts.light};
  font-size: 1.05em;
  margin-bottom: 4px;
  line-height: 1.4;
`;
