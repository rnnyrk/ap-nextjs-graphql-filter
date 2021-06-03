import { request } from 'graphql-request';

export const fetcher = (query: string, variables?: Record<string, string | number>) => {
  return request('http://localhost:3000/api/graphql', query, variables);
};
