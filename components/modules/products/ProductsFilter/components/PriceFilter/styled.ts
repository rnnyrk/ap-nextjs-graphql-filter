import styled from 'styled-components';

export const PriceFilterContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const PriceFilterInput = styled.input`
  padding: 6px 10px;
  font-size: 14px;
  margin-right: 8px;
  width: 60px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
`;
