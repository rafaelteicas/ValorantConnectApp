import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconType} from '@components';

export function ArrowIcon({size, color}: IconType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 12H18M18 12L13 7M18 12L13 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
