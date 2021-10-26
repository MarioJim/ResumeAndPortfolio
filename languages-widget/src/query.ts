import { gql, GraphQLClient } from 'graphql-request';
import { GHResponse, RepositoryInfo } from './types';

export const fetchFromGitHub = async (): Promise<RepositoryInfo[]> => {
  const githubGQLClient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      authorization: `Bearer ${process.env.GRAPHQL_GITHUB_KEY}`,
    },
  });
  const data = await githubGQLClient.request<GHResponse>(query);
  const filteredRepos = data.viewer.repositories.nodes.filter(
    (repo) => !excludedRepos.includes(repo.databaseId),
  );
  // displayFilteredRepos(filteredRepos);
  return filteredRepos;
};

const query = gql`
  {
    viewer {
      repositories(isFork: false, first: 100) {
        nodes {
          nameWithOwner
          databaseId
          languages(first: 10) {
            edges {
              size
              node {
                color
                name
              }
            }
          }
        }
      }
    }
  }
`;

const excludedRepos: number[] = [
  145342458, // MarioJim/I**-T**
  172366859, // MarioJim/mTouch
  183526378, // DiegoMont/AminotecWeb
  243273100, // MarioJim/c********-d********
  245031161, // KevinTMtz/GunnedDown
  291279859, // KevinTMtz/HackMTY2020
  339570034, // MarioJim/google-sps-portfolio
  394398597, // MarioJim/A01173359_g*******_202109
  402961873, // MarioJim/L****A
  411078787, // J***J****C***/k******-b*******
];

const displayFilteredRepos = (filteredRepos: RepositoryInfo[]) => {
  console.log(
    filteredRepos
      .map(({ databaseId, nameWithOwner, languages }) => ({
        databaseId,
        nameWithOwner,
        lines: languages.edges.reduce((acc, val) => acc + val.size, 0),
      }))
      .sort((r1, r2) => r2.lines - r1.lines),
  );
};
