import styled, { css } from 'styled-components';

export const Button = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple};
  border: 2px solid ${({ theme }) => theme.colors.purple};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({ active }) => active && css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple};
  `};
`;

type ButtonProps = {
  active: boolean;
};
