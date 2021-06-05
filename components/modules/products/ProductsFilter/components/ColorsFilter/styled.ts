import styled, { css } from 'styled-components';

export const ColorsFilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 16px;
`;

export const ColorBlock = styled.div<ColorBlockProps>`
  width: 50px;
  height: 20px;
  cursor: pointer;
  margin: 0 4px 4px 0;
  background-color: ${({ color }) => color};
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  opacity: .7;
  transition: transform .2s, opacity .2s;

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }

  ${({ active }) => active && css`
    opacity: 1;
    transform: translateY(-3px);
  `};
`;

type ColorBlockProps = {
  active?: boolean;
  color: string;
};
