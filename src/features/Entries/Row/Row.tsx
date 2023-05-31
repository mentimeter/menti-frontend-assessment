import { ArrowDown, ArrowUp, Trash2 } from 'lucide-react';
import { useRouter } from 'next/router';
import { useCallback, memo } from 'react';
import { useEntryActions } from '../../../hooks/useEntryAction';
import {
  Actions,
  Container,
  Title,
  Description,
  Content,
  ActionButton,
  Heading,
  Badge,
  ContentInnerWrapper,
  ContentImage,
} from './styles';

interface Props {
  id: string;
  title: string;
  age: number;
  description: string;
  imageUrl?: string;
  isPublished: boolean;
}

const _Row = ({
  id,
  title,
  age,
  isPublished,
  description,
  imageUrl,
}: Props) => {
  const { push } = useRouter();
  const {
    handleRemoveEntry,
    handlePublishEntry,
    isLoadingCreate,
    isLoadingPublish,
    isLoadingRemove,
    isLoadingUpdate,
  } = useEntryActions();

  const handleRemoveClick = useCallback(
    () => handleRemoveEntry(id),
    [handleRemoveEntry, id],
  );

  const handlePublishClick = useCallback(
    () =>
      handlePublishEntry(
        { id, age, title, description, isPublished },
        !isPublished,
      ),
    [handlePublishEntry, id, title, description, isPublished],
  );

  const handleClick = useCallback(() => {
    push(`/?id=${id}`);
  }, [id, push]);

  const isLoading =
    isLoadingCreate || isLoadingPublish || isLoadingRemove || isLoadingUpdate;

  return (
    <Container>
      <Content className={isPublished ? 'published' : ''} onClick={handleClick}>
        {imageUrl ? (
          <ContentImage style={{ backgroundImage: `url(${imageUrl})` }} />
        ) : null}
        <ContentInnerWrapper>
          <Heading>
            <Title>{title}</Title>
            <Badge>ID: {id}</Badge>
            <Badge>Age {age}</Badge>
          </Heading>
          <Description>{description}</Description>
        </ContentInnerWrapper>
      </Content>
      <Actions>
        <ActionButton
          onClick={!isLoading ? handlePublishClick : null}
          className={isLoading ? 'disabled' : ''}
        >
          {isPublished ? <ArrowDown /> : <ArrowUp />}
        </ActionButton>
        <ActionButton
          onClick={!isLoading ? handleRemoveClick : null}
          className={isLoading ? 'disabled' : ''}
        >
          <Trash2 />
        </ActionButton>
      </Actions>
    </Container>
  );
};

// This component will likely be rendered like A LOT so lets be safe and memoize it
export const Row = memo(_Row);
