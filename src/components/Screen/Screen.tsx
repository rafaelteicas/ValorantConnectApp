import React from 'react';

import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps, Header} from '@components';
import {useAppSafeArea} from '@hooks';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({children, canGoBack, ...props}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  console.log(top);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Box
        padding="s32"
        backgroundColor="backgroundColor"
        flex={1}
        style={{paddingBottom: bottom, paddingTop: top}}
        {...props}>
        {canGoBack && <Header />}
        {children}
      </Box>
    </KeyboardAvoidingView>
  );
}
