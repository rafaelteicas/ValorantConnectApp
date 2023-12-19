import React from 'react';

import {G, Svg, Path} from 'react-native-svg';

import {IconType} from '@components';

export function EditIcon({size, color}: IconType) {
  return (
    <Svg
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}>
      <G>
        <G>
          <Path d="M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067 c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4 L40.877,471.123z" />
        </G>
      </G>
      <G>
        <G>
          <Path d="M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825 C515.134,119.679,515.134,99.354,502.598,86.818z" />
        </G>
      </G>
    </Svg>
  );
}
