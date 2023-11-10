import React from 'react';

import {AuthCredentialsProvider} from '@service';
import {ThemeProvider} from '@shopify/restyle';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Toast} from '@components';
import {Navigator} from '@routes';
import {theme} from '@theme';

const queryClient = new QueryClient();

export function App() {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Navigator />
            <Toast />
          </SafeAreaProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}
