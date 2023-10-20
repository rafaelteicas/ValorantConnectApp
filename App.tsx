import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {theme} from './src/theme/theme';
import {Box} from './src/shared/components/Box/Box';
import {Text} from './src/shared/components/Text/Text';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} backgroundColor="backgroundColor">
        <Text color="primary">Ola</Text>
      </Box>
    </ThemeProvider>
  );
}
