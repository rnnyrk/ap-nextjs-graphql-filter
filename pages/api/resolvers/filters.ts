export const filterCategories = (products, categories) => {
  return products.filter((product) => {
    const tags = product?.node?.categoryTags;
    if (!tags) return false;
    const list = categories.split(',');
    return tags.some((t) => list.includes(t));
  });
};

export const filterPriceRange = (products, from, to) => {
  return products.filter((product) => {
    const fromPrice = parseInt(from, 10);
    const toPrice = parseInt(to, 10);
    const price = parseInt(product.node.shopifyProductEu?.variants.edges[0].node.price, 10);

    return price >= fromPrice && price <= toPrice;
  });
};

export const filterPage = (products, offset, limit) => {
  return products.slice(offset, offset + limit);
};

