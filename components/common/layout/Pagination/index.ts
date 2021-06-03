import styled from 'styled-components';

import { Button } from '../../interaction';

export const Pagination = styled.div`
  display: flex;

  ${Button} {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
