import data from '../data.js';
import { filterCategories, paginatedProducts } from './filters';

export const resolvers = {
  Query: {
    getProducts: (_, args) => {
      const { offset, limit, categories } = args;

      try {
        let products = data.products;
        if (categories) {
          products = filterCategories(products, categories);
        }
        if (typeof offset !== 'undefined' && offset >= 0 && limit) {
          products = paginatedProducts(products, offset, limit);
        }

        return products.map((product) => ({
          name: product.node.name,
          image: product.node.thumbnailImage.file.url,
          categories: product.node.categoryTags,
        }));
      } catch (error) {
        throw error;
      }
    },
    getTotalProducts: (_, args) => {
      const { categories } = args;

      try {
        let products = data.products;
        if (categories) {
          products = filterCategories(products, categories);
        }

        return products.length;
      } catch (error) {
        throw error;
      }
    },
    getCategories: () => {
      try {
        return data.products.reduce((acc, product) => {
          const tags = product.node.categoryTags;
          if (!tags || !tags.length) return acc;
          tags.forEach((tag) => {
            if (!acc.includes(tag.trim())) {
              acc.push(tag);
            }
          });
          return acc;
        }, []);
      } catch (error) {
        throw error;
      }
    },
  },
};
