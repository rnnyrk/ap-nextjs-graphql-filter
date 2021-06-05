import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Product {
    id: ID
    name: String
    image: String
    categories: [String]
    price: Int
  }

  type Query {
    getProducts(offset: Int!, limit: Int!, categories: String, from: String, to: String): [Product]
    getTotalProducts(categories: String, from: String, to: String): Int
    getCategories: [String]
  }
`;
