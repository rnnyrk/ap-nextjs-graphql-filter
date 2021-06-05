import * as React from 'react';

import { CategoriesFilter, PriceFilter } from './components';
import { ProductsFilterContainer } from './styled';

export const ProductsFilter: React.FC<ProductsFilterProps> = ({
  categories,
}) => {
  return (
    <ProductsFilterContainer>
      <CategoriesFilter categories={categories} />
      <PriceFilter />
    </ProductsFilterContainer>
  );
};

type ProductsFilterProps = {
  categories?: string[];
};
