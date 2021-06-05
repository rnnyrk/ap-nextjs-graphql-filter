import styled from 'styled-components';

export const Container = styled.div`
  max-width: 956px;
  margin: 60px auto;
  padding: 32px;
  overflow-x: scroll;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2);
  background-color: ${({ theme }) => theme.colors.white};
`;
