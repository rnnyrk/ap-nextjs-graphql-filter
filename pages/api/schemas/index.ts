import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Product {
    id: ID
    name: String
    image: String
    categories: [String]
  }

  type Query {
    getProducts(offset: Int, limit: Int): [Product]
    getTotalProducts: Int
  }
`;