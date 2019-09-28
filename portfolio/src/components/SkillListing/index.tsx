import React from 'react';
import { Skill } from 'data';
import { Wrapper, Point } from './styles';
import { Subtitle as Title } from '../../styles/shared-components';

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
