import type { ReactNode } from "react";
import { Container, Title } from "./styles";

interface Props {
  className?: string;
  children: ReactNode;
  title?: string;
}

export const Card = ({ className, children, title }: Props) => (
  <Container className={className}>
    {title && <Title>{title}</Title>}
    {children}
  </Container>
);
