import React from 'react';

import {Image} from 'react-native';

import {Box, BoxProps} from '../Box/Box';

interface Props {
  size?: number;
  boxProps?: BoxProps;
}

export function Logo({size = 150, boxProps}: Props) {
  return (
    <Box {...boxProps}>
      <Image
        source={require('../../assets/brand/Logo.png')}
        style={{
          width: size,
          resizeMode: 'contain',
        }}
      />
    </Box>
  );
}
