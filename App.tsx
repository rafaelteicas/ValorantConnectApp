import React from 'react';

import {ThemeProvider} from '@shopify/restyle';

import {QueryClient, QueryClientProvider} from 'react-query';

import {Navigator} from '@routes';
import {theme} from '@theme';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
