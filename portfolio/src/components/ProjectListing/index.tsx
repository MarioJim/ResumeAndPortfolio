import React from 'react';
import { Project } from '../../data/projects';
import { Wrapper, Link } from './styles';
import { Title, Subtitle, Points } from '../../styles/shared-components';

interface Props {
  project: Project
}

const ProjectListing: React.FC<Props> = ({ project }) => {
  const { link, title, subtitle, points } = project;
  return (
    <Wrapper>
      <Link target="_blank" href={link}>
        <Title>{title}</Title>
      </Link>
      <Subtitle>{subtitle}</Subtitle>
      <Points>
        {points.map((point, key) => (
          <li key={key}>{point}</li>
        ))}
      </Points>
    </Wrapper>
  );
}

export default ProjectListing;
