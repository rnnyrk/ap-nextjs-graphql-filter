import * as i from 'types';

export type Product = {
  name: string;
  image: string;
  categories: string[];
  price: number;
};

export type ProductsResponse = {
  count: number;
  products: i.Product[];
};
