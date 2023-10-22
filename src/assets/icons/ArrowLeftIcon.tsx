import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {Box, IconType} from '@components';

export function ArrowLeftIcon({size, color}: IconType) {
  return (
    <Box style={{transform: 'rotateY(180deg)'}}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Box>
  );
}
