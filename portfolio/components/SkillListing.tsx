import React from 'react';
import { Skill } from 'data';
import styled from '@emotion/styled';

import { Point, Subtitle as Title } from './shared-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin-top: 6px;

  @media (max-width: 820px) {
    display: block;
  }
`;

interface Props {
  skill: Skill;
}

const SkillListing: React.FC<Props> = ({ skill }) => {
  const { title, points } = skill;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ul>
        <Point style={{ listStyleType: 'none' }}>{points}</Point>
      </ul>
    </Wrapper>
  );
};

export default SkillListing;
