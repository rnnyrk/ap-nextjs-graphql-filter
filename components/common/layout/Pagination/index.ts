import styled from 'styled-components';

import { Button } from '../../interaction';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;

  ${Button} {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
