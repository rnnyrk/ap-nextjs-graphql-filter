import * as i from 'types';
import * as React from 'react';

import { Loader } from 'common/layout';

import { Product } from './components';
import { ProductsOverviewContainer } from './styled';

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  products, loading,
}) => {
  return (
    <ProductsOverviewContainer>
      {loading && <Loader />}
      {products?.map((product, index) => {
        return <Product key={`product_${index}`} {...product} />;
      })}
    </ProductsOverviewContainer>
  );
};

type ProductsOverviewProps = {
  products: i.Product[];
  loading: boolean;
};
