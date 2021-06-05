import data from '../data.js';
import { filterCategories, filterColors, filterPriceRange, filterPage } from './filters';

export const resolvers = {
  Query: {
    getProducts: (_, args) => {
      const { offset, limit, categories, colors, from, to } = args;

      try {
        let products = data.products;

        if (categories) {
          products = filterCategories(products, categories);
        }
        if (colors) {
          products = filterColors(products, colors);
        }
        if (from && to) {
          products = filterPriceRange(products, from, to);
        }
        // Count must be saved without pagination filtered
        const count = products.length;
        if (typeof offset !== 'undefined' && offset >= 0 && limit) {
          products = filterPage(products, offset, limit);
        }

        return {
          products: products.map((product) => {
            const price = product.node.shopifyProductEu?.variants.edges[0].node.price;
            return {
              name: product.node.name,
              image: product.node.thumbnailImage.file.url,
              categories: product.node.categoryTags,
              price,
            };
          }),
          count,
        };
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
    getColors: () => {
      try {
        return data.products.reduce((acc, product) => {
          const color = product.node.colorFamily?.[0].name;
          if (!color) return acc;
          if (!acc.includes(color.trim())) {
            acc.push(color);
          }
          return acc;
        }, []);
      } catch (error) {
        throw error;
      }
    },
  },
};
