import React from 'react';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';

interface Props {
  size: number;
  borderRadius: number;
  iconSize: number;
}

export function DefaultAvatar({size, borderRadius, iconSize}: Props) {
  return (
    <Box
      backgroundColor="darkBox"
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      width={size}
      height={size}
      style={{
        borderRadius: borderRadius,
      }}>
      <Icon name="profileIcon" size={iconSize} />
    </Box>
  );
}
