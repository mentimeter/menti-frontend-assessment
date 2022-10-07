import styled from "styled-components";
import { TextWrap } from "../../lib/mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0 1rem 1rem 0;
  flex: 0 0 auto;
  ${TextWrap}
`;
