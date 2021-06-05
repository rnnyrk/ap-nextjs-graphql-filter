import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export const ProductHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 16px;
  width: 100%;
`;

export const ProductHGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 16px;
`;

export const ProductTitle = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  flex-basis: 70%;
  margin: 0;
`;

export const ProductPrice = styled.strong`
  font-size: 12px;
  text-transform: uppercase;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  width: 100%;
`;
