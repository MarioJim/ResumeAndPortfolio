import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHQL_GITHUB_KEY}`,
  },
});

export default client;
