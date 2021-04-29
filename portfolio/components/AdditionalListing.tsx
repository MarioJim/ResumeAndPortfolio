import React from 'react';
import { AdditionalProject } from 'data';
import { Wrapper, Title, Date, Points, Point } from './shared-components';

interface Props {
  additional: AdditionalProject;
}

const AdditionalListing: React.FC<Props> = ({ additional }) => {
  const { title, date, points } = additional;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <br />
      <Date>{date}</Date>
      <Points>
        {points.map((point, key) => (
          <Point key={key}>{point}</Point>
        ))}
      </Points>
    </Wrapper>
  );
};

export default AdditionalListing;
