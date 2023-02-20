import { X } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useEntry } from '../../hooks/useEntry';
import { Container, CloseButton, LoadingState, Spinner } from './styles';
import { useEntryActions } from '../../hooks/useEntryAction';
import { Form } from './Form';
import type { FormFields } from './Form';

interface Props {
  className?: string;
}

export const Entry = ({ className }: Props) => {
  const { query, replace } = useRouter();
  const {
    handleCreateEntry,
    handleRemoveEntry,
    handleUpdateEntry,
    handlePublishEntry,
    isLoadingRemove,
    isLoadingPublish,
  } = useEntryActions();
  const idFromQuery = query?.id as string | undefined;

  const { data: entry, isValidating } = useEntry(idFromQuery);

  const handleSubmit = async (values: FormFields) => {
    const isCreate = Boolean(!values.id);

    const result = isCreate
      ? await handleCreateEntry({
          title: values.title,
          age: Number(values.age),
          description: values.description,
          imageUrl: values.imageUrl,
          isPublished: false,
        })
      : await handleUpdateEntry({
          id: values.id,
          title: values.title,
          age: Number(values.age),
          description: values.description,
          imageUrl: values.imageUrl,
          isPublished: false,
        });

    if (isCreate) {
      replace(`/?id=${result.id}`);
    }
  };

  const handlePublishClick = useCallback(async () => {
    await handlePublishEntry(entry, !entry.isPublished);
  }, [handlePublishEntry, entry]);

  const handleRemoveClick = useCallback(async () => {
    await handleRemoveEntry(entry.id);
    replace({ query: null });
  }, [replace, handleRemoveEntry, entry?.id]);

  const cardTitle = entry?.title ? `Update ${entry.title}` : 'Add new pup';
  const initialValues: FormFields = {
    id: entry?.id || '',
    title: entry?.title || '',
    age: entry?.age.toString() || '0',
    description: entry?.description || '',
    imageUrl: entry?.imageUrl || '',
    isPublished: Boolean(entry?.isPublished),
  };

  return (
    <Container title={isValidating ? '' : cardTitle} className={className}>
      <CloseButton href="/" shallow>
        <X />
      </CloseButton>
      {isValidating ? (
        <LoadingState>
          <Spinner size={4} />
        </LoadingState>
      ) : (
        <Form
          onSubmit={handleSubmit}
          onPublishClick={handlePublishClick}
          onRemoveClick={handleRemoveClick}
          initialValues={initialValues}
          isLoadingRemove={isLoadingRemove}
          isLoadingPublish={isLoadingPublish}
        />
      )}
    </Container>
  );
};
