import React from 'react';

import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps, Header} from '@components';
import {useAppSafeArea} from '@hooks';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  paddingOff?: boolean;
  paddingVerticalOff?: boolean;
  behavior?: 'height' | 'padding' | 'position' | undefined;
}

export function Screen({
  children,
  canGoBack,
  paddingOff,
  paddingVerticalOff,
  behavior,
  ...props
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : behavior}>
      <Box
        padding={paddingOff ? undefined : 's32'}
        backgroundColor="backgroundColor"
        flex={1}
        style={{
          paddingBottom: paddingVerticalOff ? 0 : bottom,
          paddingTop: paddingVerticalOff ? 0 : top,
        }}
        {...props}>
        {canGoBack && (
          <Header paddingHorizontal={paddingOff ? 's32' : undefined} />
        )}
        {children}
      </Box>
    </KeyboardAvoidingView>
  );
}
