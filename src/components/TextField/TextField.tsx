import { type HTMLInputTypeAttribute, useRef } from 'react';
import type { ChangeEvent } from 'react';
import { useField } from 'formik';
import { Container, Input, Label, ErrorMessage } from './styles';

interface Props {
  className?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export const TextField = ({
  className,
  disabled,
  id,
  label,
  name,
  placeholder,
  type,
}: Props) => {
  const [{ value }, { touched, error }, { setValue }] = useField(name);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const showError = touched && Boolean(error);

  return (
    <>
      <Container
        className={className}
        $hasError={showError}
        $isDisabled={Boolean(disabled)}
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        <Label>{label}</Label>
        <Input
          id={id}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          ref={inputRef}
          disabled={disabled}
          type={type}
          value={value}
        />
        {showError && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    </>
  );
};
