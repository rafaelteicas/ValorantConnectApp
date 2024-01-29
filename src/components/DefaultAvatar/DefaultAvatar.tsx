import React from 'react';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';

interface Props extends BoxProps {
  size: number;
  iconSize: number;
}

export function DefaultAvatar({size, iconSize, ...boxProps}: Props) {
  return (
    <Box
      testID="default-avatar"
      backgroundColor="darkBox"
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      width={size}
      height={size}
      {...boxProps}
      style={{borderRadius: size / 3}}>
      <Icon name="profileIcon" size={iconSize} />
    </Box>
  );
}
