import React from 'react';
import { AdditionalProject } from 'data';
import { Wrapper } from './styles';
import { Subtitle as Title, Date, Points } from '../../styles/shared-components';

interface Props {
  additional: AdditionalProject
}

const AdditionalListing: React.FC<Props> = ({ additional }) => {
  const { title, date, points } = additional;
  return (
    <Wrapper>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Points>
        {points.map((point, key) => (
          <li key={key}>{point}</li>
        ))}
      </Points>
    </Wrapper>
  );
}

export default AdditionalListing;
