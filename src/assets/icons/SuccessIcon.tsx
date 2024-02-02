import React from 'react';

import {G, Path, Svg} from 'react-native-svg';

import {IconType} from '@components';

export function SuccessIcon({color, size}: IconType) {
  return (
    <Svg
      fill={color}
      width={size}
      height={size}
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 52 52">
      <G>
        <Path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18 C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811 c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166 C41.154,15.239,41.229,16.503,40.495,17.329z" />
      </G>
    </Svg>
  );
}
