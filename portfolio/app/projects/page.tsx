import type { Metadata } from 'next';
import ProjectItem from '../../components/ProjectItem';
import SideInfo from '../../components/SideInfo';
import { fetchSideInfo } from '../../lib/fetch-sideinfo';
import { fetchProjects } from '../../lib/fetch-projects';
import layout from '../../styles/layout.module.scss';

export const metadata: Metadata = {
  title: "Mario Jiménez' projects",
};

const ProjectsPage = async () => {
  const sideInfo = await fetchSideInfo();
  const projects = await fetchProjects();
  return (
    <div className={layout.twoColumnsWrapper}>
      <SideInfo {...sideInfo} />
      <div className={layout.projectsWrapper}>
        {projects.map((project) => (
          <ProjectItem key={project.databaseId} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
