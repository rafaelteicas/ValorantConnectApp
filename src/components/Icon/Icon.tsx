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
  EmailIcon,
} from '../../assets/icons';
import {Box, BoxProps} from '../Box/Box';

export interface IconProps extends BoxProps {
  name: keyof typeof Icons;
  size?: number;
  color?: keyof Theme['colors'];
  onPress?: (event: GestureResponderEvent) => void;
}

const Icons = {
  eyeIcon: EyeIcon,
  eyeOffIcon: EyeOffIcon,
  arrowIcon: ArrowIcon,
  arrowLeftIcon: ArrowLeftIcon,
  homeIcon: HomeIcon,
  searchIcon: SearchIcon,
  findTeamIcon: FindTeamIcon,
  emailIcon: EmailIcon,
};

export type IconType = {
  size: number;
  color: string;
};

export function Icon({
  size = 20,
  color = 'primary',
  name,
  onPress,
  ...boxProps
}: IconProps) {
  const {colors} = useTheme();
  const SelectedIcon = Icons[name];
  return (
    <Box {...boxProps}>
      <Pressable disabled={!onPress} onPress={onPress}>
        <SelectedIcon size={size} color={colors[color]} />
      </Pressable>
    </Box>
  );
}
