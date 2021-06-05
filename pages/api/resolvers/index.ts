import data from '../data.js';

export const resolvers = {
  Query: {
    getProducts: (_, args) => {
      const { offset, limit, categories } = args;

      try {
        let products = data.products;

        if (categories) {
          products = data.products.filter((product) => {
            const tags = product?.node?.categoryTags;
            if (!tags) return false;
            const list = categories[0].split(',');
            return tags.some((t) => list.includes(t));
          });
        }

        if (typeof offset !== 'undefined' && offset >= 0 && limit) {
          products = products.slice(offset, offset + limit);
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
    getTotalProducts: () => {
      return data.products.length;
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
