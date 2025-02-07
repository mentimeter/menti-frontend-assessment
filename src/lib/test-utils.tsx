import { render, type RenderOptions } from '@testing-library/react';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: ReactNode, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export { customRender as render };
