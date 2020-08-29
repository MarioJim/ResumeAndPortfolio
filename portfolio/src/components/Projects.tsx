import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { allowedRepos } from 'data';
import ProjectItem from './ProjectItem';

interface StaticProject {
  image: string;
  name: string;
  description: string;
  owner: string;
  url: string;
  onlineDemo?: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const { graphsimg, github } = useStaticQuery(
    graphql`
      query {
        graphsimg: file(relativePath: { eq: "graphs.png" }) {
          publicURL
        }
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
  //     .map(repo => `${repo.owner.login}/${repo.name} - ${repo.databaseId}`)
  //     .join('\n'),
  // );
  const repos = allowedRepos
    .map(({ id, onlineDemo }) => ({
      onlineDemo,
      ...github.viewer.topRepositories.nodes.find(
        repo => repo.databaseId === id,
      ),
    }))
    .sort((a, b) => (a.pushedAt > b.pushedAt ? -1 : 1));
  const staticProjects: StaticProject[] = [
    {
      image: graphsimg.publicURL,
      name: 'Graph Algorithms',
      description: 'Showcase of different graph-related algorithms',
      url: '/projects/graphs',
      onlineDemo: '/projects/graphs',
      owner: undefined,
      tags: ['p5.js', 'typescript', 'graphs'],
    },
  ];

  return (
    <div>
      {repos
        .map(repo => (
          <ProjectItem
            key={repo.databaseId}
            image={repo.openGraphImageUrl}
            title={repo.name}
            description={repo.description}
            owner={repo.owner.login}
            url={repo.url}
            onlineDemo={repo.onlineDemo}
            tags={repo.repositoryTopics.nodes.map(node => node.topic.name)}
          />
        ))
        .concat(
          staticProjects.map((project, i) => (
            <ProjectItem
              key={`project-${i}`}
              image={project.image}
              title={project.name}
              description={project.description}
              owner={project.owner}
              url={project.url}
              onlineDemo={project.onlineDemo}
              tags={project.tags}
            />
          )),
        )}
    </div>
  );
};

export default Projects;
