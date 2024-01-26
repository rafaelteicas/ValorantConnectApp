import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import {useTheme} from '@hooks';

interface Props extends ActivityIndicatorProps {
  size?: number;
}

export function ActivityIndicator({
  size = 25,
  ...activityIndicatorProps
}: Props) {
  const {colors} = useTheme();
  return (
    <RNActivityIndicator
      testID="activity-indicator"
      size={size}
      color={colors.darkBox}
      {...activityIndicatorProps}
    />
  );
}
