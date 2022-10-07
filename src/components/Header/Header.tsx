import type { ReactNode } from "react";
import { Logo } from "../Logo/Logo";
import { Container, Content, Actions } from "./styles";

type Props = { children: ReactNode };

export const Header = ({ children }: Props) => {
  return (
    <Container>
      <Content>
        <Logo />
        <Actions>{children}</Actions>
      </Content>
    </Container>
  );
};
