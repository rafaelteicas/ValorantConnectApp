import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconType} from '@components';

export function ProfileIcon({size, color}: IconType) {
  return (
    <Svg viewBox="-46 0 438 438.6" width={size} height={size} fill={color}>
      <Path d="m173.199219 0c55.78125 0 101 45.21875 101 101s-45.21875 101-101 101-101-45.21875-101-101c.054687-55.757812 45.242187-100.9453125 101-101zm0 0" />
      <Path d="m.300781 438.601562c1.597657-47.203124 19.398438-90.300781 50.597657-122.203124 32.203124-32.898438 75.601562-51 122.300781-51s90.101562 18.101562 122.300781 51c31.199219 31.902343 49 75 50.601562 122.203124zm0 0" />
    </Svg>
  );
}
