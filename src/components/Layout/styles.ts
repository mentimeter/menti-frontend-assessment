import styled from 'styled-components';
import { HEADER_HEIGHT } from '../Header/constants';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.labradorDark};
  background-color: ${({ theme }) => theme.colors.blueLight};
`;

export const Content = styled.div`
  height: calc(100% - ${HEADER_HEIGHT});
  overflow: hidden;
  padding: 1rem;
  flex: 1 1 auto;
`;
