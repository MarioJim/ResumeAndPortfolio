import React from 'react';
import { Project } from 'data';
import { Wrapper, Link, Title, Subtitle, Points, Point } from './shared-components';

interface Props {
  project: Project
}

const ProjectListing: React.FC<Props> = ({ project }) => {
  const { link, title, subtitle, points } = project;
  return (
    <Wrapper>
      <Link target="_blank" href={link} rel="noopener">
        <Title>{title}</Title>
      </Link>
      <Subtitle>{subtitle}</Subtitle>
      <Points>
        {points.map((point, key) => (
          <Point key={key}>{point}</Point>
        ))}
      </Points>
    </Wrapper>
  );
}

export default ProjectListing;
