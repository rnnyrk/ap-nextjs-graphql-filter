import styled from 'styled-components';

import { Category } from 'common/layout';

export const ProductsFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Category} {
    cursor: pointer;
  }
`;
