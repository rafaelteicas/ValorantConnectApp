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
      <Box
        padding="s32"
        flex={1}
        backgroundColor="backgroundColor"
        {...props}
        style={{paddingBottom: 0}}>
        {canGoBack && <Header />}
        {children}
      </Box>
    </KeyboardAvoidingView>
  );
}
