import React from 'react';

import {ThemeProvider} from '@shopify/restyle';

import {SignUpScreen} from '@screens';
import {theme} from '@theme';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SignUpScreen />
    </ThemeProvider>
  );
}
