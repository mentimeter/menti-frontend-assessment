import styled from "styled-components";
import { Button as DefaultButton } from "../../components/Button/Button";
import { Link } from "../../components/Link/Link";
import { Card as DefaultCard } from "../../components/Card/Card";
import { TextWrap } from "../../lib/mixins";
import { Spinner as DefaultSpinner } from "../../components/Spinner/Spinner";

export const Container = styled(DefaultCard)`
  position: relative;
  margin-bottom: 1rem;
`;

export const CloseButton = styled(Link)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Button = styled(DefaultButton)``;

export const FormRow = styled.div`
  display: flex;
  width: 100%;

  > :not(:first-child) {
    margin-left: 0.5rem;
  }
  > :not(:last-child) {
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 800px) {
    display: block;

    > :not(:first-child) {
      margin-left: 0;
    }

    > :not(:last-child) {
      margin-right: 0rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  > :not(:last-child) {
    margin-right: 0.75rem;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.pinkDark};
  margin-left: auto;
  margin-top: 0.5rem;
  ${TextWrap}
`;

export const LoadingState = styled.div`
  height: 16.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled(DefaultSpinner)`
  color: ${({ theme }) => theme.colors.blue};
`;
