import * as React from 'react';

import { useQueryParams } from 'services/hooks';
import { Category } from 'common/layout';

import { ProductsFilterContainer } from './styled';

export const ProductsFilter: React.FC<ProductsFilterProps> = ({
  categories,
}) => {
  const [activeCategories, setActiveCategories] = React.useState<string[]>([]);

  const { queryParams, setQueryParams } = useQueryParams();
  console.log({ queryParams, categories });

  const onSetCategory = (categoryId: string) => {
    const categories = [...activeCategories];
    categories.push(categoryId);
    setActiveCategories(categories);

    setQueryParams({ ...queryParams, categories: categories.join(',') });
  };

  if (!categories) return null;

  return (
    <ProductsFilterContainer>
      {categories.map((category, index) => {
        const id = `category_${index}`;
        return (
          <Category
            key={id}
            active={activeCategories?.includes(id)}
            onClick={() => onSetCategory(id)}
          >
            {category}
          </Category>
        );
      })}
    </ProductsFilterContainer>
  );
};

type ProductsFilterProps = {
  categories: string[];
};
