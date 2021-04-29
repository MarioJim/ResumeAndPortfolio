import React from 'react';
import { allowedRepos } from 'data';
import ProjectItem from './ProjectItem';
import { ProjectsRequest } from '../lib/projects-request';

interface ProjectsProps {
  req: ProjectsRequest;
}

const Projects: React.FC<ProjectsProps> = ({ req }) => {
  // Used to see the repo's id in GitHub's database
  // console.log(
  //   github.viewer.topRepositories.nodes
  //     .map((repo) => `${repo.owner.login}/${repo.name} - ${repo.databaseId}`)
  //     .join('\n'),
  // );
  return (
    <div>
      {req.nodes
        .filter((repo) => allowedRepos.includes(repo.databaseId))
        .map((repo) => (
          <ProjectItem
            key={repo.databaseId}
            image={repo.openGraphImageUrl}
            title={repo.name}
            description={repo.description}
            owner={repo.owner.login}
            url={repo.url}
            website={
              repo.homepageUrl !== 'https://mariojim.github.io/' &&
              repo.homepageUrl
            }
            tags={repo.repositoryTopics.nodes.map((node) => node.topic.name)}
          />
        ))}
    </div>
  );
};

export default Projects;
