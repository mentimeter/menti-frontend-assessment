import { ArrowDown, ArrowUp, Trash2 } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useEntryActions } from "../../../hooks/useEntryAction";
import {
  Actions,
  Container,
  Title,
  Description,
  Content,
  ActionButton,
  Heading,
  Badge,
} from "./styles";

interface Props {
  id: string;
  title: string;
  description: string;
  isPublished: boolean;
}

export const Row = ({ id, title, isPublished, description }: Props) => {
  const { push } = useRouter();
  const { handleRemoveEntry, handlePublishEntry } = useEntryActions();

  const handleRemoveClick = useCallback(
    () => handleRemoveEntry(id),
    [handleRemoveEntry, id]
  );

  const handlePublishClick = useCallback(
    () =>
      handlePublishEntry({ id, title, description, isPublished }, !isPublished),
    [handlePublishEntry, id, title, description, isPublished]
  );

  const handleClick = useCallback(() => {
    push(`/?id=${id}`);
  }, [id, push]);

  return (
    <Container>
      <Content className={isPublished ? "published" : ""} onClick={handleClick}>
        <Heading>
          <Title>{title}</Title>
          <Badge>ID: {id}</Badge>
        </Heading>
        <Description>{description}</Description>
      </Content>
      <Actions>
        <ActionButton onClick={handlePublishClick}>
          {isPublished ? <ArrowDown /> : <ArrowUp />}
        </ActionButton>
        <ActionButton onClick={handleRemoveClick}>
          <Trash2 />
        </ActionButton>
      </Actions>
    </Container>
  );
};
