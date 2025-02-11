import styled, { keyframes } from 'styled-components';
import { Loader2 } from 'lucide-react';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled(Loader2)`
  animation: ${rotateAnimation} 1s linear infinite;
  padding: 0;
  transform: translateZ(0);
`;
