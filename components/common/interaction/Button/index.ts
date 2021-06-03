import styled, { css } from 'styled-components';

export const Button = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: blue;
  border: 1px solid blue;
  cursor: pointer;

  ${({ active }) => active && css`
    color: #fff;
    background-color: blue;
  `};
`;

type ButtonProps = {
  active: boolean;
};
