import React from 'react';
import styled from '@emotion/styled';
import { Skill } from 'data';
import { Subtitle as Title } from './shared-components';
import * as fonts from '../styles/fonts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin-top: 6px;
  
  @media (max-width: 820px) {
    display: block;
  }
`;

const Point = styled.p`
  align-self: center;
  grid-column-start: 2;
  font-weight: ${fonts.light};
`;

interface Props {
  skill: Skill
}

const SkillListing: React.FC<Props> = ({ skill }) => {
  const { title, points } = skill;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Point>{points}</Point>
    </Wrapper>
  );
}

export default SkillListing;
