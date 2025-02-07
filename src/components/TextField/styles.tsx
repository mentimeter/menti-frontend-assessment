import styled, { css } from 'styled-components';
import { TextWrap } from '../../lib/mixins';

export const Container = styled.div<{
  $hasError: boolean;
  $isDisabled: boolean;
}>`
  padding: 0.25rem 1rem;
  position: relative;
  border: solid 1px ${({ theme }) => theme.colors.greyDark};
  border-radius: 4px;
  margin-bottom: 2rem;
  transition: border-color 75ms ease-in;
  width: 100%;

  :hover {
    border-color: ${({ theme }) => theme.colors.blueLight};
  }

  &:focus-within {
    ${({ $hasError }) =>
      !$hasError &&
      css`
        border-color: ${({ theme }) => theme.colors.blue};
      `}
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.pinkDark};
      :hover {
        border-color: ${theme.colors.pink};
      }
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      border-color: ${({ theme }) => theme.colors.grey};
      background: ${({ theme }) => theme.colors.grey};
      :hover {
        border-color: ${({ theme }) => theme.colors.grey};
      }
    `}
`;

export const Label = styled.label``;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: black;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;

  ::placeholder {
    color: grey;
  }

  &:focus {
    outline: none;
  }

  ${TextWrap}
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.pinkDark};
  position: absolute;
  font-size: 0.75rem;
  left: 0;
  bottom: -1.25rem;
`;
