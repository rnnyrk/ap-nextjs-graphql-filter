import * as React from 'react';

import { removeItemFromArray } from 'services';
import { useQueryParams } from 'hooks';
import { Category } from 'common/layout';
import { Label } from 'common/typography';

import { CategoriesFilterContainer } from './styled';

export const CategoriesFilter: React.FC<CategoriesFilterProps> = ({
  categories,
}) => {
  const { queryParams, setQueryParams } = useQueryParams();
  const [activeCategories, setActiveCategories] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (queryParams?.categories) {
      const queryCategories = queryParams.categories as string;
      setActiveCategories(queryCategories.split(','));
    } else {
      setActiveCategories([]);
    }
  }, [queryParams?.categories]);

  const onSetCategory = (categoryName: string) => {
    let newCategories = [...activeCategories];
    if (newCategories.includes(categoryName)) {
      newCategories = removeItemFromArray(newCategories, categoryName);
    } else {
      newCategories.push(categoryName);
    }

    setActiveCategories(newCategories);
    setQueryParams({ ...queryParams, categories: newCategories.join(',') });
  };

  return (
    <CategoriesFilterContainer>
      <Label>Categories</Label>
      <div>
        {categories.map((category, index) => {
          return (
            <Category
              as="button"
              key={`category_${index}`}
              active={activeCategories?.includes(category)}
              onClick={() => onSetCategory(category)}
            >
              {category}
            </Category>
          );
        })}
      </div>
    </CategoriesFilterContainer>
  );
};

type CategoriesFilterProps = {
  categories: string[];
};
