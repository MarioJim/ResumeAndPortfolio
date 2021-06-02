import { allowedRepos } from 'data';
import { gql } from 'graphql-request';
import GithubGQLClient from './github-graphql-client';

const query = gql`
  {
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
`;

export interface GitHubRepository {
  databaseId: number;
  name: string;
  owner: {
    login: string;
  };
  url: string;
  openGraphImageUrl: string;
  description: string;
  homepageUrl: string;
  repositoryTopics: {
    nodes: {
      topic: {
        name: string;
      };
    }[];
  };
}

export type ProjectsRequest = GitHubRepository[];

export const fetchProjectsRequest = async (): Promise<ProjectsRequest> => {
  const req = await GithubGQLClient.request(query);
  const { nodes } = req.viewer.topRepositories;
  return nodes.filter((repo) => allowedRepos.includes(repo.databaseId));
};
