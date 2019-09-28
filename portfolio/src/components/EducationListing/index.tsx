import React from 'react';

import { School } from 'data';
import { Wrapper, Location } from './styles';
import { Title, Subtitle, Date, Points } from '../../styles/shared-components';

interface Props {
  school: School
}

const EducationListing: React.FC<Props> = ({ school }) => {
  const { title, schoolName, date, location, points } = school;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{schoolName}</Subtitle>
      <Date>{date}</Date>
      <Location>{location}</Location>
      <Points>
        {points.map((point, key) => (
          <li key={key}>{point}</li>
        ))}
      </Points>
    </Wrapper>
  );
}

export default EducationListing;
