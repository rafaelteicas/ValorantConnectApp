import React from 'react';

import {GestureResponderEvent, Pressable} from 'react-native';

import {useTheme} from '@hooks';
import {Theme} from '@theme';

import {
  EyeIcon,
  EyeOffIcon,
  ArrowIcon,
  ArrowLeftIcon,
  HomeIcon,
  SearchIcon,
  FindTeamIcon,
} from '../../assets/icons';

export type IconProps = {
  name: keyof typeof Icons;
  size?: number;
  color?: keyof Theme['colors'];
  onPress?: (event: GestureResponderEvent) => void;
};

const Icons = {
  eyeIcon: EyeIcon,
  eyeOffIcon: EyeOffIcon,
  arrowIcon: ArrowIcon,
  arrowLeftIcon: ArrowLeftIcon,
  homeIcon: HomeIcon,
  searchIcon: SearchIcon,
  findTeamIcon: FindTeamIcon,
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
