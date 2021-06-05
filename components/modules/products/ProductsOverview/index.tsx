import * as i from 'types';
import * as React from 'react';

import { useQueryParams } from 'hooks';
import { Loader } from 'common/layout';

import { Button } from 'common/interaction';
import { Product } from './components';
import { ProductsOverviewContainer, ProductsEmptyState } from './styled';

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  products, loading,
}) => {
  const { setQueryParams } = useQueryParams();

  return (
    <ProductsOverviewContainer>
      {loading && <Loader />}
      {products && products.length > 0 ? (
        products.map((product, index) => {
          return <Product key={`product_${index}`} {...product} />;
        })
      ) : (
        <ProductsEmptyState>
          <h2>No products found</h2>
          <Button onClick={() => setQueryParams({})}>
            Reset filters
          </Button>
        </ProductsEmptyState>
      )}
    </ProductsOverviewContainer>
  );
};

type ProductsOverviewProps = {
  products: i.Product[];
  loading: boolean;
};
