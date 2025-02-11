import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';
import NextLink from 'next/link';
import { A } from './styles';

export interface Props extends LinkProps {
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'button';
  disabled?: boolean;
}
export const Link = ({
  variant = 'default',
  children,
  className,
  disabled,
  ...props
}: Props) => {
  return (
    <NextLink passHref {...props} legacyBehavior>
      <A $variant={variant} className={className} disabled={disabled}>
        {children}
      </A>
    </NextLink>
  );
};
