import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { VALIDATION_SCHEMA_TEXTS } from './constants';
import { render } from '../../lib/test-utils';
import { Form } from './Form';

const emptyFormFields = {
  id: '',
  title: '',
  description: '',
  isPublished: false,
};
const filledFormFields = {
  id: '1234',
  title: 'Mock title',
  description:
    'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa',
  isPublished: false,
};

const handlePublish = jest.fn();
const handleRemove = jest.fn();
const handleSubmit = jest.fn();

describe('Entry/Form', () => {
  it('should not submit and show validation errors if the form is not valid', async () => {
    render(
      <Form
        initialValues={emptyFormFields}
        onSubmit={handleSubmit}
        onPublishClick={handlePublish}
        onRemoveClick={handleRemove}
        isLoadingRemove={false}
        isLoadingPublish={false}
      />,
    );

    const submitButton = screen.queryByTestId('entry-form-submit');
    await userEvent.click(submitButton);

    await screen.findByText(VALIDATION_SCHEMA_TEXTS.title.required);
    expect(
      screen.getByText(VALIDATION_SCHEMA_TEXTS.description.required),
    ).toBeInTheDocument();

    expect(handleSubmit).not.toHaveBeenCalledWith({ emptyFormFields });
  });

  it(`should show Create in submit button and hide Delete/Publish buttons when it's creation form`, async () => {
    render(
      <Form
        initialValues={emptyFormFields}
        onSubmit={handleSubmit}
        onPublishClick={handlePublish}
        onRemoveClick={handleRemove}
        isLoadingRemove={false}
        isLoadingPublish={false}
      />,
    );

    const submitButton = screen.queryByTestId('entry-form-submit');
    expect(submitButton.textContent).toMatch('Create');

    expect(screen.queryByTestId('entry-form-publish')).not.toBeInTheDocument();
    expect(screen.queryByTestId('entry-form-remove')).not.toBeInTheDocument();
  });

  it(`should show Update in submit button and show Delete/Publish buttons when it's update form`, async () => {
    render(
      <Form
        initialValues={{ ...emptyFormFields, id: '1234' }}
        onSubmit={handleSubmit}
        onPublishClick={handlePublish}
        onRemoveClick={handleRemove}
        isLoadingRemove={false}
        isLoadingPublish={false}
      />,
    );

    const submitButton = screen.queryByTestId('entry-form-submit');
    expect(submitButton.textContent).toMatch('Update');

    expect(screen.getByTestId('entry-form-publish')).toBeInTheDocument();
    expect(screen.getByTestId('entry-form-remove')).toBeInTheDocument();
  });

  it('should call handleSubmit with form fields when submit button is clicked', async () => {
    render(
      <Form
        initialValues={filledFormFields}
        onSubmit={handleSubmit}
        onPublishClick={handlePublish}
        onRemoveClick={handleRemove}
        isLoadingRemove={false}
        isLoadingPublish={false}
      />,
    );

    const submitButton = screen.queryByTestId('entry-form-submit');
    await userEvent.click(submitButton);

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(filledFormFields),
    );
  });

  it('should call handleRemove with form fields when delete button is clicked', async () => {
    render(
      <Form
        initialValues={filledFormFields}
        onSubmit={handleSubmit}
        onPublishClick={handlePublish}
        onRemoveClick={handleRemove}
        isLoadingRemove={false}
        isLoadingPublish={false}
      />,
    );

    const removeButton = screen.queryByTestId('entry-form-remove');
    await userEvent.click(removeButton);

    await waitFor(() => expect(handleRemove).toHaveBeenCalled());
  });
});
