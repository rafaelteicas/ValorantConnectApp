import React from 'react';

import {G, Path, Svg} from 'react-native-svg';

import {IconType} from '@components';

export function EmailIcon({size, color}: IconType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill={color}>
      <G id="Mail">
        <Path d="m29 6h-26a.99974.99974 0 0 0 -1 1v18a.99974.99974 0 0 0 1 1h26a.99974.99974 0 0 0 1-1v-18a.99974.99974 0 0 0 -1-1zm-3.44531 5.832-9 6a.99986.99986 0 0 1 -1.10937 0l-9-6a1 1 0 0 1 1.10937-1.664l8.44531 5.62985 8.44531-5.62985a1 1 0 0 1 1.10938 1.664z" />
      </G>
    </Svg>
  );
}
