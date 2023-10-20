import React from 'react';

import {ColorValue, Pressable} from 'react-native';

import {pallette} from '@theme';

import {EyeIcon} from '../../assets/icons/EyeIcon';

type IconProps = {
  name: keyof typeof Icons;
  size?: number;
  color?: keyof typeof pallette;
};

const Icons = {
  eyeIcon: EyeIcon,
};

export type IconType = {
  size: number;
  color: ColorValue;
};

export function Icon({size = 20, color = 'red', name}: IconProps) {
  const SelectedIcon = Icons[name];
  return (
    <Pressable>
      <SelectedIcon size={size} color={color} />
    </Pressable>
  );
}
