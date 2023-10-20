import React from 'react';

import {ThemeProvider} from '@shopify/restyle';

import {theme} from '@theme';

import {SignInScreen} from './src/screens/auth/SignInScreen/SignInScreen';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SignInScreen />
    </ThemeProvider>
  );
}
