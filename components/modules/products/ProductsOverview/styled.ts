import styled from 'styled-components';

export const ProductsOverviewContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 40px;
`;

export const ProductsEmptyState = styled.div`
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.pale};
`;
