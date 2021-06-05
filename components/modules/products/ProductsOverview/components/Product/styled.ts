import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const ProductHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const ProductTitle = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

export const ProductCategory = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 4px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;

  &:first-of-type {
    margin-left: 0;
  }
`;
