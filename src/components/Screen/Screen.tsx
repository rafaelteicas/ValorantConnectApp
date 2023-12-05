import React from 'react';

import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps, Header} from '@components';
import {useAppSafeArea} from '@hooks';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  paddingOff?: boolean;
}

export function Screen({
  children,
  canGoBack,
  paddingOff,
  ...props
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Box
        padding={paddingOff ? undefined : 's32'}
        backgroundColor="backgroundColor"
        flex={1}
        style={{
          paddingBottom: paddingOff ? 0 : bottom,
          paddingTop: paddingOff ? 0 : top,
        }}
        {...props}>
        {canGoBack && <Header />}
        {children}
      </Box>
    </KeyboardAvoidingView>
  );
}
