import styled, { css } from 'styled-components';

export const Category = styled.span<CategoryProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 2px;
  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
  appearance: none;
  transition: background-color .2s, color .2s;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  ${({ active }) => active && css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};
  `};
`;

type CategoryProps = {
  active?: boolean;
};
