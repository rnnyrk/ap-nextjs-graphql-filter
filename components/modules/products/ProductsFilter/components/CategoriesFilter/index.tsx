import * as React from 'react';

import { removeItemFromArray } from 'services';
import { useQueryParams } from 'hooks';
import { Category } from 'common/layout';

import { CategoriesFilterContainer } from './styled';

export const CategoriesFilter: React.FC<CategoriesFilterProps> = ({
  categories,
}) => {
  const { queryParams, setQueryParams } = useQueryParams();
  const [activeCategories, setActiveCategories] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (queryParams?.categories) {
      const categories = queryParams.categories as string;
      setActiveCategories(categories.split(','));
    }
  }, []);

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
    <CategoriesFilterContainer>
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
    </CategoriesFilterContainer>
  );
};

type CategoriesFilterProps = {
  categories?: string[];
};
