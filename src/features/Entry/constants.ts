import { object as yupObject, string as yupString } from 'yup';

export const VALIDATION_SCHEMA_TEXTS = {
  title: {
    required: 'Please enter a title',
  },
  description: {
    required: 'Please select a description',
  },
};

export const validationSchema = yupObject({
  title: yupString().required(VALIDATION_SCHEMA_TEXTS.title.required),
  id: yupString(),
  description: yupString().required(
    VALIDATION_SCHEMA_TEXTS.description.required,
  ),
  mockValueA: yupString(),
  mockValueB: yupString(),
});
