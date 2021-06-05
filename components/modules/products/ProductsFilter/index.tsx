import * as React from 'react';

import { removeItemFromArray } from 'services';
import { useQueryParams } from 'hooks';
import { Category } from 'common/layout';

import { ProductsFilterContainer } from './styled';

export const ProductsFilter: React.FC<ProductsFilterProps> = ({
  categories,
}) => {
  const { queryParams, setQueryParams } = useQueryParams();
  const [activeCategories, setActiveCategories] = React.useState<string[]>([]);

  const onSetCategory = (categoryName: string) => {
    let categories = [...activeCategories];

    if (categories.includes(categoryName)) {
      categories = removeItemFromArray(categories, categoryName);
    } else {
      categories.push(categoryName);
    }

    setActiveCategories(categories);
    setQueryParams({ ...queryParams, categories: categories.join(',') });
  };

  if (!categories) return null;

  return (
    <ProductsFilterContainer>
      {categories.map((category, index) => {
        return (
          <Category
            key={`category_${index}`}
            active={activeCategories?.includes(category)}
            onClick={() => onSetCategory(category)}
          >
            {category}
          </Category>
        );
      })}
    </ProductsFilterContainer>
  );
};

type ProductsFilterProps = {
  categories?: string[];
};
