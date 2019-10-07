import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { allowedRepos } from 'data';
import ProjectItem from './ProjectItem';

const Projects: React.FC = () => {
  const { github } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            repositories(first: 50, privacy: PUBLIC,  orderBy: {field: PUSHED_AT, direction: DESC}) {
              nodes {
                databaseId
                name
                owner {
                  login
                }
                url
                openGraphImageUrl
                description
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  // Used to see the repo's id in GitHub's database
  // console.log(github.viewer.repositories.nodes
  //   .map(repo => `${repo.name} - ${repo.databaseId}`)
  //   .join('\n')
  // );
  const repos = github.viewer.repositories.nodes
      .filter(repo => allowedRepos.includes(repo.databaseId));
  return (
    <div>
      {repos.map(repo => (
        <ProjectItem
          key={repo.databaseId}
          image={repo.openGraphImageUrl}
          title={repo.name}
          description={repo.description}
          owner={repo.owner.login}
          url={repo.url}
          tags={
            repo.repositoryTopics.nodes
              .map(node => node.topic.name)
              .slice(0, 4)
          }
        />
      ))}
    </div>
  );
}

export default Projects;
