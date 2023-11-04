import React from 'react';

import {GestureResponderEvent, TouchableOpacity} from 'react-native';

import {Box, BoxProps, Icon, Text} from '@components';

interface ButtonProps extends BoxProps {
  title?: string;
  rightComponent?: boolean;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

export function Button({
  title,
  rightComponent,
  onPress,
  disabled,
  ...boxProps
}: ButtonProps) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Box
        flexDirection="row"
        justifyContent={rightComponent ? 'space-between' : 'center'}
        alignItems="center"
        padding="s16"
        backgroundColor={disabled ? 'lightBox' : 'primary'}
        height={62}
        {...boxProps}>
        <Box width={20} height={20} />
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
