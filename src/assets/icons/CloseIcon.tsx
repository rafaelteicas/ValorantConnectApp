import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconType} from '@components';

export function CloseIcon({size, color}: IconType) {
  return (
    <Svg
      id="Close"
      enable-background="new 0 0 128 128"
      viewBox="0 0 128 128"
      width={size}
      height={size}
      fill={color}>
      <Path d="m71.1 64 42.9 42.9-7.1 7.1-42.9-42.9-42.9 42.9-7.1-7.1 42.9-42.9-42.9-42.9 7.1-7.1 42.9 42.9 42.9-42.9 7.1 7.1z" />
    </Svg>
  );
}
