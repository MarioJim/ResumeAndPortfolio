import React from 'react';
import { Experience } from 'data';
import { Wrapper, Title, Subtitle, Date, Location, Points, Point } from './shared-components';

interface Props {
  exp: Experience
}

const ExperienceListing: React.FC<Props> = ({ exp }) => {
  const { title, workPlace, date, location, points } = exp;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{workPlace}</Subtitle>
      <Date>{date}</Date>
      <Location>{location}</Location>
      <Points>
        {points.map((point, key) => (
          <Point key={key}>{point}</Point>
        ))}
      </Points>
    </Wrapper>
  );
}

export default ExperienceListing;
