import Image from 'next/image';
import { ReactNode } from 'react';
import { Actions, Container, Content, Heading } from './styles';

type Props = { children: ReactNode };

export const Header = ({ children }: Props) => {
  return (
    <Container>
      <Content>
        <Heading>
          <Image
            src="/mentipup.svg"
            alt="logo"
            width={60}
            height={50}
            className="logo"
          />
          <span className="title">MentiPups</span>
        </Heading>
        <Actions>{children}</Actions>
      </Content>
    </Container>
  );
};
