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

const thisRepoId = 206996709;
const projectRepoIds: number[] = [
  167217902, // MarioJim/CompetitiveProgramming
  206996709, // MarioJim/ResumeAndPortfolio
  218893835, // MarioJim/dotfiles
  296929253, // MarioJim/fuzzy-pdf
  297854675, // KevinTMtz/DauverreWeb
  328483336, // MarioJim/touchegg-music-client
  328806789, // MarioJim/HNReader
  346187383, // MarioJim/tec-transcript-translater
  401459712, // MarioJim/SpotifyHallOfFame
  407247561, // MarioJim/miniclj
];

interface GitHubRepository {
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

export interface ProjectData {
  databaseId: number;
  image: string;
  title: string;
  owner: string;
  description: string;
  url: string;
  website: string | null;
  tags: string[];
}

export const fetchProjects = async (): Promise<ProjectData[]> => {
  const req: any = await GithubGQLClient.request(query);
  return req.viewer.topRepositories.nodes
    .filter((repo: GitHubRepository | null) => repo !== null)
    .map((repo: GitHubRepository) =>
      repo.databaseId === thisRepoId ? { ...repo, homepageUrl: null } : repo,
    )
    .filter((repo: GitHubRepository) =>
      projectRepoIds.includes(repo.databaseId),
    )
    .map(({ databaseId, description, url, ...repo }: GitHubRepository) => ({
      databaseId,
      description,
      url,
      image: repo.openGraphImageUrl,
      title: repo.name,
      owner: repo.owner.login,
      website: repo.homepageUrl,
      tags: repo.repositoryTopics.nodes.map((node) => node.topic.name),
    }));
};
