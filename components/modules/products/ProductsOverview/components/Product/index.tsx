import * as i from 'types';
import * as React from 'react';

import {
  ProductContainer,
  ProductTitle,
  ProductImage,
  ProductCategory,
  ProductHeader,
} from './styled';

export const Product: React.FC<ProductProps> = ({
  name, image, categories,
}) => {
  return (
    <ProductContainer>
      <ProductHeader>
        <ProductTitle>{name}</ProductTitle>
        {categories?.map((category) => {
          return (
            <ProductCategory>{category}</ProductCategory>
          );
        })}
      </ProductHeader>
      <ProductImage src={image} alt={name} />
    </ProductContainer>
  );
};

type ProductProps = i.Product;
