import React from 'react';
import { additional, experiences, projects, schools, skills } from 'data';
import styled from '@emotion/styled';
import AdditionalListing from './AdditionalListing';
import EducationListing from './EducationListing';
import ExperienceListing from './ExperienceListing';
import ProjectListing from './ProjectListing';
import SkillListing from './SkillListing';
import * as colors from '../styles/colors';
import * as fonts from '../styles/fonts';

const StyledWrapper = styled.div`
  margin-left: 30px;
  border-left: 6px solid white;
  padding-left: 41px;

  @media (max-width: 820px) {
    margin-left: 0;
    padding-left: 0;
    border-left: 0;
  }
`;

const Section = styled.section`
  position: relative;
  margin-bottom: 48px;

  @media (max-width: 820px) {
    margin-bottom: 32px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.8em;
  font-weight: ${fonts.bold};

  &:before {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -59px;
    top: 8px;
    border: 7px solid ${colors.background};
    box-sizing: border-box;

    @media (max-width: 820px) {
      content: none;
    }
  }
`;

const animationClasses = 'animate__animated animate__fadeInUp';

const About: React.FC = () => (
  <StyledWrapper>
    <Section className={animationClasses}>
      <SectionTitle>Experience</SectionTitle>
      {experiences.map((exp, key) => (
        <ExperienceListing exp={exp} key={key} />
      ))}
    </Section>
    <Section className={animationClasses}>
      <SectionTitle>Education</SectionTitle>
      {schools.map((school, key) => (
        <EducationListing school={school} key={key} />
      ))}
    </Section>
    <Section className={animationClasses}>
      <SectionTitle>Software Projects</SectionTitle>
      {projects.map((project, key) => (
        <ProjectListing project={project} key={key} />
      ))}
    </Section>
    <Section className={animationClasses}>
      <SectionTitle>Skills</SectionTitle>
      {skills.map((skill, key) => (
        <SkillListing skill={skill} key={key} />
      ))}
    </Section>
    <Section className={animationClasses}>
      <SectionTitle>Additional Experience and Awards</SectionTitle>
      {additional.map((add, key) => (
        <AdditionalListing additional={add} key={key} />
      ))}
    </Section>
  </StyledWrapper>
);

export default About;
