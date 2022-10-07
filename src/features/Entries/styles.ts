import styled, { css } from "styled-components";
import { Card as DefaultCard } from "../../components/Card/Card";
import { Spinner as DefaultSpinner } from "../../components/Spinner/Spinner";

export const Container = styled(DefaultCard)`
  max-width: 52rem;
  position: relative;
  max-height: 100%;
  max-height: 100%;
  overflow: hidden;
  min-width: 25rem;
`;

export const List = styled.div`
  max-height: 100%;
  overflow: auto;
  flex: 1;
`;

export const EmptyState = styled.div`
  padding: 0.5rem 1rem 1rem 0;
`;

export const LoadingState = styled.div`
  height: 14rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled(DefaultSpinner)`
  color: ${({ theme }) => theme.colors.blue};
`;
