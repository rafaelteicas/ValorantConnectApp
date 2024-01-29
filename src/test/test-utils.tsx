import React, {ReactElement} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
} from '@testing-library/react-native';

import {QueryClient, QueryClientProvider} from 'react-query';

import {theme} from '@theme';

export const wrapperAllProviders = () => {
  const queryClient = new QueryClient({
    defaultOptions: {queries: {retry: false}, mutations: {retry: false}},
  });
  return ({children}: {children: React.ReactNode}) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: wrapperAllProviders(), ...options});

const customRenderHook = <Props, Result>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) => renderHook(renderCallback, {wrapper: wrapperAllProviders(), ...options});

export * from '@testing-library/react-native';
export {customRender as render};
export {customRenderHook as renderHook};
