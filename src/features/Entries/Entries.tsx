import { Container, EmptyState, List, LoadingState, Spinner } from './styles';
import { Row } from './Row/Row';
import { useEntries } from '../../hooks/useEntries';

interface Props {
  className?: string;
}

export const Entries = ({ className }: Props) => {
  const { data: entries, isValidating } = useEntries();
  const isLoading = entries.length === 0 && isValidating;
  const isEmpty = entries.length === 0 && !isLoading;

  return (
    <Container title="Pups" className={className}>
      {isLoading && (
        <LoadingState>
          <Spinner size={4} />
        </LoadingState>
      )}
      {isEmpty && <EmptyState>There are no pups yet</EmptyState>}
      {!isLoading && !isEmpty && (
        <List>
          {entries?.map(
            ({ id, age, title, description, isPublished, imageUrl }) => (
              <Row
                id={id}
                key={id}
                title={title}
                age={age}
                description={description}
                isPublished={isPublished}
                imageUrl={imageUrl}
              />
            ),
          )}
        </List>
      )}
    </Container>
  );
};
