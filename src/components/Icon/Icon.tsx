import React from 'react';

import {GestureResponderEvent, TouchableOpacity} from 'react-native';

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
  CloseIcon,
  ProfileIcon,
  DeleteIcon,
  EditIcon,
  CameraIcon,
  MessageIcon,
  AlertIcon,
  SuccessIcon,
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
  closeIcon: CloseIcon,
  profileIcon: ProfileIcon,
  deleteIcon: DeleteIcon,
  editIcon: EditIcon,
  cameraIcon: CameraIcon,
  messageIcon: MessageIcon,
  alertIcon: AlertIcon,
  successIcon: SuccessIcon,
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
      <TouchableOpacity testID={name} disabled={!onPress} onPress={onPress}>
        <SelectedIcon size={size} color={colors[color]} />
      </TouchableOpacity>
    </Box>
  );
}
