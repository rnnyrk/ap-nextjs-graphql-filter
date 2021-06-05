import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};

  svg {
    width: 100px;
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;
