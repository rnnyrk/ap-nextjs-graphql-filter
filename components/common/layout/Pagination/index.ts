import styled from 'styled-components';

import { Button } from '../../interaction';

export const Pagination = styled.div`
  display: flex;
  margin-top: 16px;

  ${Button} {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
