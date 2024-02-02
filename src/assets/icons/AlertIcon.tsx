import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconType} from '@components';

export function AlertIcon({color, size}: IconType) {
  return (
    <Svg
      id="Layer_1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}>
      <Path d="m256 6c-138.071 0-250 111.929-250 250s111.929 250 250 250 250-111.929 250-250-111.929-250-250-250zm-32.385 115.5h65.085v182.63h-65.085zm66.214 270h-67.658v-64.8h67.658z" />
    </Svg>
  );
}
