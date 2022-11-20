import { gql } from 'graphql-request';
import GithubGQLClient from './github-graphql-client';

const query = gql`
  {
    viewer {
      avatarUrl(size: 400)
      bio
    }
  }
`;

export interface SideInfoRequest {
  avatarUrl: string;
  bio: string;
}

export const fetchSideInfo = async (): Promise<SideInfoRequest> =>
  GithubGQLClient.request(query).then((data) => data.viewer);
