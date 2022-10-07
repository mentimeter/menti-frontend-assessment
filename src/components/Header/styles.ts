import styled from "styled-components";
import { HEADER_HEIGHT } from "./constants";

export const Container = styled.div`
  height: ${HEADER_HEIGHT};
  background: ${({ theme }) => theme.colors.white};
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey};
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  padding: 0 1rem;
  width: 100%;
`;

export const Actions = styled.div`
  margin-left: 2rem;
`;
