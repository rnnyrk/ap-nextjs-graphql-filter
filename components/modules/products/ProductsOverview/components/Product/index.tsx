import * as i from 'types';
import * as React from 'react';

import { Category } from 'common/layout';

import {
  ProductContainer,
  ProductTitle,
  ProductImage,
  ProductHeader,
} from './styled';

export const Product: React.FC<ProductProps> = ({
  name, image, categories,
}) => {
  return (
    <ProductContainer>
      <ProductHeader>
        <ProductTitle>{name}</ProductTitle>
        {categories?.map((category, index) => {
          return (
            <Category key={`product_category_${index}`} active>
              {category}
            </Category>
          );
        })}
      </ProductHeader>
      <ProductImage src={image} alt={name} />
    </ProductContainer>
  );
};

type ProductProps = i.Product;
