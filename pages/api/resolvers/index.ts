import data from '../data.js';

export const resolvers = {
  Query: {
    getProducts: (_, args) => {
      const { offset, limit } = args;

      try {
        const products = typeof offset !== 'undefined' && offset >= 0 && limit
          ? data.products.slice(offset, limit)
          : data.products;

        console.log({
          products,
          length: products.length,
        });

        return products.map((product) => ({
          name: product.node.name,
          image: product.node.thumbnailImage.file.url,
          categories: product.node.categoryTags,
        }));
      } catch (error) {
        throw error;
      }
    },
  },
};
