import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';

import {useTheme} from '@hooks';

interface Props {
  size?: number;
}

export function ActivityIndicator({size = 25}: Props) {
  const {colors} = useTheme();
  return <RNActivityIndicator size={size} color={colors.darkBox} />;
}
