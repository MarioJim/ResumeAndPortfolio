import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import AdditionalListing from './AdditionalListing';
import EducationListing from './EducationListing';
import ProjectListing from './ProjectListing';
import SkillListing from './SkillListing';
import * as colors from '../styles/colors';
import * as fonts from '../styles/fonts';

const StyledWrapper = styled.div`
  margin-left: 30px;
  border-left: 6px solid white;
  padding-left: 44px;
`;

const Section = styled.section`
  position: relative;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: ${fonts.bold};

  &:before {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -62px;
    top: 8px;
    border: 7px solid ${colors.background};
    box-sizing: border-box;
  }
`;

const About: React.FC = () => {
  const { allProject, allAdditional, allSchool, allSkill } = useStaticQuery(
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
        allAdditional {
          nodes {
            title
            points
            location
            date
          }
        }
        allSchool {
          nodes {
            date
            location
            points
            schoolName
            title
          }
        }
        allSkill {
          nodes {
            points
            title
          }
        }
      }
    `
  );
  const schools = allSchool.nodes;
  const projects = allProject.nodes;
  const skills = allSkill.nodes;
  const additional = allAdditional.nodes;

  return (
    <StyledWrapper>
      <Section className="animated fadeInUp">
        <SectionTitle>Education</SectionTitle>
        {schools.map((school, key) => (
          <EducationListing school={school} key={key} />
        ))}
      </Section>
      <Section className="animated fadeInUp">
        <SectionTitle>Software Projects</SectionTitle>
        {projects.map((project, key) => (
          <ProjectListing project={project} key={key}  />
        ))}
      </Section>
      <Section className="animated fadeInUp">
        <SectionTitle>Skills</SectionTitle>
        {skills.map((skill, key) => (
          <SkillListing skill={skill} key={key}  />
        ))}
      </Section>
      <Section className="animated fadeInUp">
        <SectionTitle>Additional Experience and Awards</SectionTitle>
        {additional.map((add, key) => (
          <AdditionalListing additional={add} key={key}  />
        ))}
      </Section>
    </StyledWrapper>
  );
}

export default About;
