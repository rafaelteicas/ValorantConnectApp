import React from 'react';

import {GestureResponderEvent, TouchableOpacity} from 'react-native';

import {Box, Icon, Text} from '@components';

type ButtonProps = {
  title?: string;
  rightComponent?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export function Button({title, rightComponent, onPress}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="s16"
        borderColor="primary"
        borderWidth={1}
        height={62}
        borderRadius="b12">
        <Text preset="paragraphMedium" color="primary">
          {title}
        </Text>
        {rightComponent && (
          <Box>
            <Icon name="arrowIcon" color="primary" size={28} />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
}
