import fetch from 'node-fetch';
import { GHResponse, RepositoryInfo } from './types';
require('dotenv').config();

export const fetchFromGitHub = async (): Promise<RepositoryInfo[]> => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.GRAPHQL_GITHUB_KEY}`,
    },
    body: JSON.stringify({ query }),
  });
  const json: GHResponse = await response.json();
  const filteredRepos = json.data.viewer.repositories.nodes.filter(
    (repo) => !excludedRepos.includes(repo.databaseId),
  );
  // displayFilteredRepos(filteredRepos);
  return filteredRepos;
};

const query = `{
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
}`;

const excludedRepos: number[] = [
  145342458, // MarioJim/I**-T**
  172366859, // MarioJim/mTouch
  183526378, // DiegoMont/AminotecWeb
  207170678, // MarioJim/mariojim.github.io
  243273100, // MarioJim/c********-d********
  245031161, // KevinTMtz/GunnedDown
  291279859, // KevinTMtz/HackMTY2020
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
