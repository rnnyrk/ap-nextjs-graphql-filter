import { createGlobalStyle } from 'styled-components';

export const GlobalStyling = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.pale};
  }
`;
