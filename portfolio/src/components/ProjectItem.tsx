import React from 'react';
import styled from 'styled-components';
import { Project } from 'data';

interface Props { project: Project }

const ProjectItem: React.FC<Props> = ({ project }) => (
  <div>
    <h2>Project</h2>
    <p>{project.title}</p>
  </div>
);

export default ProjectItem;
