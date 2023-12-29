import React, {useEffect} from 'react';

import {Platform} from 'react-native';

import {AuthCredentialsProvider} from '@service';
import {ThemeProvider} from '@shopify/restyle';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Modal, Toast} from '@components';
import {Navigator} from '@routes';
import {theme} from '@theme';

const queryClient = new QueryClient();

export function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  return (
    <AuthCredentialsProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Navigator />
            <Modal />
            <Toast />
          </QueryClientProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </AuthCredentialsProvider>
  );
}
