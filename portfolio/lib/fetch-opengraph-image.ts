import { gql } from 'graphql-request';
import GithubGQLClient from './github-graphql-client';

const query = gql`
  {
    viewer {
      repository(name: "mariojim.github.io") {
        openGraphImageUrl
      }
    }
  }
`;

export const fetchOpenGraphImage = async (): Promise<string> =>
  GithubGQLClient.request(query).then(
    (data) => data.viewer.repository.openGraphImageUrl,
  );
