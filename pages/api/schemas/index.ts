import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Product {
    name: String
    image: String
    categories: [String]
    price: String
  }

  type GetProducts {
    products: [Product]
    count: Int
  }

  type Query {
    getProducts(
      offset: Int!,
      limit: Int!,
      categories: String,
      colors: String,
      from: String,
      to: String
    ): GetProducts
    getCategories: [String]
    getColors: [String]
  }
`;
