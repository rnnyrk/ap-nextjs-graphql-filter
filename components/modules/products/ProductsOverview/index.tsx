import * as i from 'types';
import * as React from 'react';

import { Product } from './components';
import { ProductsOverviewContainer } from './styled';

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  products,
}) => {
  return (
    <ProductsOverviewContainer>
      {products?.map((product, index) => {
        return <Product key={`product_${index}`} {...product} />;
      })}
    </ProductsOverviewContainer>
  );
};

type ProductsOverviewProps = {
  products: i.Product[];
};
