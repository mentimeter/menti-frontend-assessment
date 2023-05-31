import type { FormikHelpers } from 'formik';
import { useState } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { TextField } from '../../components/TextField/TextField';
import { Button, FormRow, Buttons, ErrorMessage } from './styles';
import { validationSchema } from './constants';

export interface FormFields {
  id: string;
  isPublished: boolean;
  age: string;
  title: string;
  imageUrl?: string;
  description: string;
}

interface Props {
  onSubmit: (v: FormFields) => Promise<void>;
  onRemoveClick: () => Promise<void>;
  onPublishClick: () => Promise<void>;
  initialValues: FormFields;
  isLoadingRemove: boolean;
  isLoadingPublish: boolean;
}

export const Form = ({
  onSubmit,
  onRemoveClick,
  onPublishClick,
  initialValues,
  isLoadingRemove,
  isLoadingPublish,
}: Props) => {
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (
    values: FormFields,
    { setSubmitting }: FormikHelpers<FormFields>,
  ) => {
    setSubmitting(true);
    try {
      await onSubmit(values);
    } catch (error) {
      setSubmitError(
        error?.message || 'Something went wrong, please try again',
      );
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FormRow>
            <TextField label="Title" name="title" />
            <TextField label="Age" name="age" />
            <TextField label="Id" name="id" disabled />
          </FormRow>
          <TextField label="Description" name="description" />
          <TextField label="Image URL" name="imageUrl" />
          <Buttons>
            {initialValues.id && (
              <Button
                isLoading={isLoadingRemove}
                onClick={onRemoveClick}
                data-testid="entry-form-remove"
                disabled={!initialValues.id}
                variant="warning"
              >
                Delete
              </Button>
            )}
            {initialValues.id && (
              <Button
                isLoading={isLoadingPublish}
                onClick={onPublishClick}
                data-testid="entry-form-publish"
                disabled={!initialValues.id}
                variant="secondary"
              >
                {initialValues.isPublished ? 'Unpublish' : 'Publish'}
              </Button>
            )}
            <Button
              type="submit"
              isLoading={isSubmitting}
              data-testid="entry-form-submit"
            >
              {initialValues.id ? 'Update' : 'Create'}
            </Button>
          </Buttons>
          {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
        </FormikForm>
      )}
    </Formik>
  );
};
