import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const Projects: React.FC = () => {
  const { allProject } = useStaticQuery(
    graphql`
      query {
        allProject {
          nodes {
            date
            link
            points
            subtitle
            title
          }
        }
      }
    `
  );
  
  return (
    <div>
      <h2>Projects</h2>
      {allProject.nodes.map((project, key) => (
        <ProjectItem project={project} key={key} />
      ))}
    </div>
  );
}

export default Projects;
