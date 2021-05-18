import React from 'react';
import { GetStaticProps } from 'next';

import Header from '../components/Header';
import { Root, Wrapper } from '../components/layout';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import SideInfo from '../components/SideInfo';
import { fetchSideInfoRequest, SideInfoRequest } from '../lib/sideinfo-request';
import { fetchProjectsRequest, ProjectsRequest } from '../lib/projects-request';

interface ProjectsPageProps {
  sideInfoReq: SideInfoRequest;
  projectsReq: ProjectsRequest;
}

export const getStaticProps: GetStaticProps = async () => {
  const [sideInfoReq, projectsReq] = await Promise.all([
    fetchSideInfoRequest(),
    fetchProjectsRequest(),
  ]);

  return {
    props: {
      sideInfoReq,
      projectsReq,
    },
  };
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({
  sideInfoReq,
  projectsReq,
}) => (
  <Root>
    <SEO title="Mario Jiménez' projects" />
    <Header />
    <Wrapper>
      <SideInfo req={sideInfoReq} />
      <Projects req={projectsReq} />
    </Wrapper>
  </Root>
);

export default ProjectsPage;
