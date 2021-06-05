import data from '../data.js';
import { filterCategories, filterPriceRange, filterPage } from './filters';

export const resolvers = {
  Query: {
    getProducts: (_, args) => {
      const { offset, limit, categories, from, to } = args;

      try {
        let products = data.products;

        if (categories) {
          products = filterCategories(products, categories);
        }
        if (from && to) {
          products = filterPriceRange(products, from, to);
        }
        if (typeof offset !== 'undefined' && offset >= 0 && limit) {
          products = filterPage(products, offset, limit);
        }

        return products.map((product) => {
          const price = product.node.shopifyProductEu?.variants.edges[0].node.price;
          return {
            name: product.node.name,
            image: product.node.thumbnailImage.file.url,
            categories: product.node.categoryTags,
            price,
          };
        });
      } catch (error) {
        throw error;
      }
    },
    getTotalProducts: (_, args) => {
      const { categories, from, to } = args;

      try {
        let products = data.products;
        if (categories) {
          products = filterCategories(products, categories);
        }
        if (from && to) {
          products = filterPriceRange(products, from, to);
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
