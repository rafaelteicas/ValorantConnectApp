import React from 'react';

import {GestureResponderEvent, TouchableOpacity} from 'react-native';

import {Box, BoxProps, Icon, Text} from '@components';

import {Presets, getButtonPresets} from './getButtonPresets';

export interface ButtonProps extends BoxProps {
  title?: string;
  rightComponent?: boolean;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  outline?: boolean;
  preset?: Presets;
  paddingHorizontalOn?: boolean;
}

export function Button({
  title,
  rightComponent,
  disabled,
  preset = 'primary',
  paddingHorizontalOn,
  onPress,
  ...boxProps
}: ButtonProps) {
  const buttonPreset = getButtonPresets[preset];
  return (
    <TouchableOpacity
      disabled={disabled}
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
        <Text preset="paragraphMedium" color="backgroundContrast">
          {title}
        </Text>
        {rightComponent && (
          <Icon name="arrowIcon" color="backgroundContrast" size={26} />
        )}
      </Box>
    </TouchableOpacity>
  );
}

const $buttonStyle: ButtonProps = {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  height: 62,
};
