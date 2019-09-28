import React from 'react';
import {
  schools,
  projects,
  skills,
  additional
} from 'data';

import AdditionalListing from '../../components/AdditionalListing';
import EducationListing from '../../components/EducationListing';
import ProjectListing from '../../components/ProjectListing';
import SkillListing from '../../components/SkillListing';
import { StyledWrapper, SectionTitle, Section } from './styles';

const About: React.FC = () => (
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

export default About;
