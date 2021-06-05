import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Product {
    name: String
    image: String
    categories: [String]
    price: String
  }

  type Query {
    getProducts(
      offset: Int!,
      limit: Int!,
      categories: String,
      colors: String,
      from: String,
      to: String
    ): [Product]
    getTotalProducts(categories: String, colors: String, from: String, to: String): Int
    getCategories: [String]
    getColors: [String]
  }
`;
