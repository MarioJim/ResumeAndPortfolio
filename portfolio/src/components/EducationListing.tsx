import React from 'react';
import { School } from 'data';
import {
  Wrapper,
  Title,
  Subtitle,
  Date,
  Location,
  Points,
  Point,
} from './shared-components';

interface Props {
  school: School;
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
          <Point key={key}>{point}</Point>
        ))}
      </Points>
    </Wrapper>
  );
};

export default EducationListing;
