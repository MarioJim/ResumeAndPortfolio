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
  158993292, // MarioJim/SmallProjects
  172366859, // MarioJim/mTouch
  183526378, // DiegoMont/AminotecWeb
  243273100, // MarioJim/c********-d********
  245031161, // KevinTMtz/GunnedDown
  291279859, // KevinTMtz/HackMTY2020
  339570034, // MarioJim/google-sps-portfolio
  394398597, // MarioJim/A01173359_g*******_202109
  402961873, // MarioJim/L****A
  406536192, // karenrios2208/ProyectoAplicacionesWeb
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
      .sort((r1, r2) => r1.lines - r2.lines),
  );
  const topRepoForLangs: { [key: string]: { sz: number; name: string } } = {};
  filteredRepos.forEach((r) => {
    r.languages.edges.forEach((l) => {
      const lastSz = topRepoForLangs[l.node.name]?.sz || 0;
      if (lastSz < l.size) {
        topRepoForLangs[l.node.name] = { sz: l.size, name: r.nameWithOwner };
      }
    });
  });
  console.log(topRepoForLangs);
};
