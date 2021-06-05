import styled from 'styled-components';

export const PriceFilterForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const PriceFilterInput = styled.input`
  padding: 6px 10px;
  font-size: 14px;
  margin-right: 8px;
  width: 70px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
`;
