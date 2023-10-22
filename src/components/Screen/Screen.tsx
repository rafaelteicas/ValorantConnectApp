import React from 'react';
import {KeyboardAvoidingView} from 'react-native';

import {Box, BoxProps, Header} from '@components';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({children, canGoBack, ...props}: ScreenProps) {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Box flex={1} backgroundColor="backgroundColor" {...props}>
        {canGoBack && <Header />}
        <Box flex={1} justifyContent="center">
          {children}
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
}
