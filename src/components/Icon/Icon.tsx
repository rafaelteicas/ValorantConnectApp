import React from 'react';

import {GestureResponderEvent, Pressable} from 'react-native';

import {useTheme} from '@hooks';
import {Theme} from '@theme';

import {EyeIcon, EyeOffIcon, ArrowIcon} from '../../assets/icons';

type IconProps = {
  name: keyof typeof Icons;
  size?: number;
  color?: keyof Theme['colors'];
  onPress?: (event: GestureResponderEvent) => void;
};

const Icons = {
  eyeIcon: EyeIcon,
  eyeOffIcon: EyeOffIcon,
  arrowIcon: ArrowIcon,
};

export type IconType = {
  size: number;
  color: string;
};

export function Icon({size = 20, color = 'primary', name, onPress}: IconProps) {
  const {colors} = useTheme();
  const SelectedIcon = Icons[name];
  return (
    <Pressable onPress={onPress}>
      <SelectedIcon size={size} color={colors[color]} />
    </Pressable>
  );
}
