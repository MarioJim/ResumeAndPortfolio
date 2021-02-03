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
            topRepositories(
              first: 50
              orderBy: { field: PUSHED_AT, direction: DESC }
            ) {
              nodes {
                databaseId
                name
                owner {
                  login
                }
                url
                openGraphImageUrl
                description
                pushedAt
                homepageUrl
                repositoryTopics(first: 4) {
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
    `,
  );
  // Used to see the repo's id in GitHub's database
  // console.log(
  //   github.viewer.topRepositories.nodes
  //     .map((repo) => `${repo.owner.login}/${repo.name} - ${repo.databaseId}`)
  //     .join('\n'),
  // );
  return (
    <div>
      {github.viewer.topRepositories.nodes
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
