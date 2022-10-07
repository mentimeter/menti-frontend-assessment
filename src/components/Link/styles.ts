import styled, { css } from "styled-components";
import { Props } from "./Link";

export const A = styled.a<{ $variant: Props["variant"]; disabled?: boolean }>`
  display: inline-block;
  text-decoration: none;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }

  transition: all ease-in 100ms;

  ${({ $variant, disabled }) =>
    $variant === "button"
      ? css`
          background: ${({ theme }) => theme.colors.blue};
          border-radius: 4px;
          border: none;
          color: white;
          font-weight: bold;
          min-width: 5rem;
          padding: 0.75rem 1rem;

          :hover {
            cursor: pointer;
          }

          ${disabled &&
          css`
            background: ${({ theme }) => theme.colors.grey};
            color: ${({ theme }) => theme.colors.labradorLight};
            :hover {
              cursor: default;
              opacity: 1;
            }
          `}
        `
      : css`
          :hover {
            color: ${({ theme }) => theme.colors.blue};
          }
        `}
`;
