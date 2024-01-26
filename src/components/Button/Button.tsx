import React from 'react';

import {GestureResponderEvent, TouchableOpacity} from 'react-native';

import {Box, BoxProps, Icon, Text} from '@components';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

import {Presets, getButtonPresets} from './getButtonPresets';

export interface ButtonProps extends BoxProps {
  title?: string;
  rightComponent?: boolean;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  outline?: boolean;
  preset?: Presets;
  paddingHorizontalOn?: boolean;
  isLoading?: boolean;
}

export function Button({
  title,
  rightComponent,
  disabled,
  preset = 'primary',
  paddingHorizontalOn,
  isLoading,
  onPress,
  ...boxProps
}: ButtonProps) {
  const buttonPreset = getButtonPresets[preset];
  return (
    <TouchableOpacity
      testID="touchable-opacity"
      disabled={disabled || isLoading}
      onPress={onPress}
      style={{
        paddingHorizontal: paddingHorizontalOn ? 32 : undefined,
      }}>
      <Box
        {...$buttonStyle}
        justifyContent={rightComponent ? 'space-between' : 'center'}
        borderColor={buttonPreset.borderColor}
        borderWidth={buttonPreset.borderWidth}
        borderRadius={buttonPreset.borderRadius}
        backgroundColor={disabled ? 'lightBox' : buttonPreset.backgroundColor}
        {...boxProps}>
        {rightComponent && <Box width={26} height={26} />}
        {isLoading ? (
          <ActivityIndicator size={26} />
        ) : (
          <Text preset="heading" color="backgroundContrast">
            {title}
          </Text>
        )}
        {!isLoading && rightComponent && (
          <Icon name="arrowIcon" color="backgroundContrast" size={26} />
        )}
        {isLoading && <Box width={26} height={26} />}
      </Box>
    </TouchableOpacity>
  );
}

const $buttonStyle: ButtonProps = {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  height: 62,
  style: {
    paddingVertical: 0,
  },
};
