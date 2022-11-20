import ProjectItem from '../../components/ProjectItem';
import SEO from '../../components/SEO';
import SideInfo from '../../components/SideInfo';
import { fetchSideInfo } from '../../lib/fetch-sideinfo';
import { fetchProjects } from '../../lib/fetch-projects';
import layout from '../../styles/layout.module.scss';

const ProjectsPage = async () => {
  const sideInfo = await fetchSideInfo();
  const projects = await fetchProjects();
  return (
    <>
      <SEO title="Mario Jiménez' projects" />
      <div className={layout.twoColumnsWrapper}>
        <SideInfo {...sideInfo} />
        <div className={layout.projectsWrapper}>
          {projects.map((project) => (
            <ProjectItem key={project.databaseId} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
