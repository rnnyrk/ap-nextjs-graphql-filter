import styled, { css } from 'styled-components';

export const Button = styled.button<ButtonProps>`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.purple};
  border: 2px solid ${({ theme }) => theme.colors.purple};
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color .2s, color .2s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple};
  }

  ${({ active }) => active && css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple};
  `};

  ${({ variant }) => variant === 'square' && css`
    width: 40px;
    padding: 0;
  `};
`;

type ButtonProps = {
  active?: boolean;
  variant?: 'square';
};
