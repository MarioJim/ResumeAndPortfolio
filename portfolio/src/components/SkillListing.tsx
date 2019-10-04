import React from 'react';
import styled from 'styled-components';
import { Skill } from 'data';
import { Subtitle as Title } from './shared-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin-top: 6px;
`;

const Point = styled.p`
  align-self: center;
  grid-column-start: 2;
`;

interface Props {
  skill: Skill
}

const SkillListing: React.FC<Props> = ({ skill }) => {
  const { title, points } = skill;
  return (
    <Wrapper>
      <Title>{title}</Title>
      {points.map((point, key) => (
        <Point key={key}>{point}</Point>
      ))}
    </Wrapper>
  );
}

export default SkillListing;
