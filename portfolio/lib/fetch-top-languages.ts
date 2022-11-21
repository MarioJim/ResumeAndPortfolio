import { gql } from 'graphql-request';
import GithubGQLClient from './github-graphql-client';

interface GHResponse {
  viewer: {
    repositories: {
      nodes: {
        nameWithOwner: string;
        databaseId: number;
        languages: {
          edges: {
            size: number;
            node: {
              color: string;
              name: string;
            };
          }[];
        };
      }[];
    };
  };
}

export interface Language {
  name: string;
  size: number;
  color: string;
}

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

const excludedLanguages = ['CSS', 'HTML', 'TeX', 'Jupyter Notebook'];

export const fetchTopLanguages = async (): Promise<Language[]> => {
  const data = await GithubGQLClient.request<GHResponse>(query);
  const repos = data.viewer.repositories.nodes.filter(
    (repo) => !excludedRepos.includes(repo.databaseId),
  );

  const languages: Record<string, { size: number; color: string }> = {};
  repos
    .flatMap((repo) => repo.languages.edges)
    .filter((lang) => lang.node.color !== null)
    .filter((lang) => !excludedLanguages.includes(lang.node.name))
    .forEach(({ size, node: { name, color } }) => {
      if (!languages.hasOwnProperty(name)) {
        languages[name] = { color, size: 0 };
      }
      languages[name].size += size;
    });

  const top10Langs = Object.entries(languages)
    .map(([name, { size, color }]) => ({ name, size, color }))
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);

  const totalSize = top10Langs.reduce((acc, val) => acc + val.size, 0);

  return top10Langs.map((lang) => ({ ...lang, size: lang.size / totalSize }));
};
