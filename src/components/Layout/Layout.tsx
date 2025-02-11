import type { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Container, Content } from './styles';

export const Layout = ({
  headerActions,
  children,
}: {
  headerActions?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <Container>
      <Header>{headerActions}</Header>
      <Content>{children}</Content>
    </Container>
  );
};
