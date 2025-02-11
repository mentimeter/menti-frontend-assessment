import type { ButtonHTMLAttributes } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { Container, SpinnerContainer } from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'warning';
}

export const Button = ({
  className,
  id,
  children,
  variant,
  isLoading,
  disabled,
  ...props
}: Props) => {
  return (
    <Container
      id={id}
      className={className}
      $variant={variant}
      disabled={disabled || isLoading}
      type="button"
      {...props}
    >
      {isLoading ? (
        <SpinnerContainer>
          <Spinner id={`${id}- loader`} />
        </SpinnerContainer>
      ) : (
        children
      )}
    </Container>
  );
};
