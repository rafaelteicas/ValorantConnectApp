import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthCredentialsProvider} from '@service';
import {ThemeProvider} from '@shopify/restyle';
import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
} from '@testing-library/react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientConfig, QueryClientProvider} from 'react-query';

import {theme} from '@theme';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
    mutations: {
      retry: false,
    },
  },
};

export const wrapperAllProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);
  return ({children}: {children: React.ReactNode}) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export const wrapScreenProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);
  return ({children}: {children: React.ReactNode}) => (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer>{children}</NavigationContainer>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: wrapperAllProviders(), ...options});

export function renderScreen<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: wrapScreenProviders(), ...options});
}

const customRenderHook = <Props, Result>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) => renderHook(renderCallback, {wrapper: wrapperAllProviders(), ...options});

export * from '@testing-library/react-native';
export {customRender as render};
export {customRenderHook as renderHook};
