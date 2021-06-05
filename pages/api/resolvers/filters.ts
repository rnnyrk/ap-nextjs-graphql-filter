export const filterCategories = (products, categories) => {
  return products.filter((product) => {
    const tags = product?.node?.categoryTags;
    if (!tags) return false;
    const list = categories[0].split(',');
    return tags.some((t) => list.includes(t));
  });
};

export const paginatedProducts = (products, offset, limit) => {
  return products.slice(offset, offset + limit);
};

