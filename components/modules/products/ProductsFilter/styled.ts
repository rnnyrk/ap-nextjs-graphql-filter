import styled from 'styled-components';

import { Category } from 'common/layout';

export const ProductsFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;

  ${Category} {
    cursor: pointer;
  }
`;
