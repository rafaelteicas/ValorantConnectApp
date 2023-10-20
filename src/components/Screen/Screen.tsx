import React from 'react';
import {KeyboardAvoidingView} from 'react-native';

import {Box, BoxProps} from '@components';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
}

export function Screen({children, ...props}: ScreenProps) {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Box
        flex={1}
        backgroundColor="backgroundColor"
        justifyContent="center"
        {...props}>
        {children}
      </Box>
    </KeyboardAvoidingView>
  );
}
