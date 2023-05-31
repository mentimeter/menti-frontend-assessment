import styled from 'styled-components';
import { TextWrap } from '../../../lib/mixins';

export const Actions = styled.div`
  opacity: 0;
  display: flex;
  transition: opacity 100ms ease-in;
  > :not(:last-child) {
    margin-right: 0.25rem;
  }
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  max-width: 100%;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  position: relative;

  :not(:last-child) {
    border-bottom: solid 1px ${({ theme }) => theme.colors.grey};
  }

  :hover {
    ${Actions} {
      opacity: 1;
      transition: opacity 100ms ease-in;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  position: relative;
  cursor: pointer;

  display: flex;

  &.published::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1rem;
    width: 0.5rem;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

export const ContentImage = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #eee;
  border-radius: 50%;
`;

export const ContentInnerWrapper = styled.div`
  flex: 1;
  margin-left: 1.6rem;
`;

export const Heading = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`;

export const Badge = styled.div`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.blueLight};
  margin-left: 0.6rem;
`;

export const Title = styled.div`
  margin: 0 0.5rem 0 0;
  max-width: 32rem;
  font-weight: 500;
  ${TextWrap}
`;

export const ID = styled.span``;

export const Description = styled.div`
  max-width: 32rem;
  ${TextWrap}
`;

export const ActionButton = styled.div`
  background: none;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 100ms ease-in;
  opacity: 0.8;

  &.disabled {
    opacity: 0.3;
  }

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
