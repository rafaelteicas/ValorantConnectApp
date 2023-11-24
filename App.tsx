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
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthCredentialsProvider>
          <QueryClientProvider client={queryClient}>
            <Navigator />
            <Toast />
          </QueryClientProvider>
        </AuthCredentialsProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
