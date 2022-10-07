import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/lib/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
