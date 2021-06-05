import * as React from 'react';

import { CategoriesFilter, ColorsFilter, PriceFilter } from './components';
import { ProductsFilterContainer } from './styled';

export const ProductsFilter: React.FC<ProductsFilterProps> = ({
  categories, colors,
}) => {
  return (
    <ProductsFilterContainer>
      {categories && <CategoriesFilter categories={categories} />}
      {colors && <ColorsFilter colors={colors} />}
      <PriceFilter />
    </ProductsFilterContainer>
  );
};

type ProductsFilterProps = {
  categories?: string[];
  colors?: string[];
};
