import React from 'react';

import {ThemeProvider} from '@shopify/restyle';

import {Navigator} from '@routes';
import {theme} from '@theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  );
}
