import * as i from 'types';
import * as React from 'react';

import { Category } from 'common/layout';

import {
  ProductContainer,
  ProductTitle,
  ProductImage,
  ProductHeader,
  ProductPrice,
  ProductHGroup,
} from './styled';

export const Product: React.FC<ProductProps> = ({
  name, image, categories, price,
}) => {
  return (
    <ProductContainer>
      <ProductImage src={image} alt={name} />
      <ProductHeader>
        <ProductHGroup>
          <ProductTitle>{name}</ProductTitle>
          <ProductPrice>&euro; {price}</ProductPrice>
        </ProductHGroup>
        {categories?.map((category, index) => {
          return (
            <Category key={`product_category_${index}`} active>
              {category}
            </Category>
          );
        })}
      </ProductHeader>
    </ProductContainer>
  );
};

type ProductProps = i.Product;
