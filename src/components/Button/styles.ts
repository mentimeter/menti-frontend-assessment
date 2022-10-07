import styled, { css } from "styled-components";
import type { Props } from "./Button";

export const Container = styled.button<{
  $variant: Props["variant"];
  disabled?: boolean;
}>`
  border-radius: 6px;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  min-width: 7rem;
  min-height: 2.5rem;
  padding: 0.75rem 1rem;
  position: relative;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }

  transition: all ease-in 100ms;

  ${({ $variant }) => {
    if ($variant === "secondary") {
      return css`
        background: ${({ theme }) => theme.colors.green};
      `;
    }

    if ($variant === "warning") {
      return css`
        background: ${({ theme }) => theme.colors.pinkDark};
      `;
    }

    return css`
      background: ${({ theme }) => theme.colors.blue};
    `;
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.labradorLight};
      :hover {
        cursor: default;
        opacity: 1;
      }
    `}
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
