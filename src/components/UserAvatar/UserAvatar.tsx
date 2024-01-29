import React from 'react';
import {Image, ImageProps} from 'react-native';

import {DefaultAvatar} from '../DefaultAvatar/DefaultAvatar';

interface Props extends Omit<ImageProps, 'source'> {
  profileImage?: string;
  size?: number;
  bordeRadius?: number;
}

export function UserAvatar({
  profileImage,
  size = 50,
  bordeRadius = size / 4,
  ...imageProps
}: Props) {
  return profileImage ? (
    <Image
      testID="image"
      source={{uri: profileImage}}
      width={size}
      height={size}
      borderRadius={bordeRadius}
      style={{
        marginRight: 20,
      }}
      {...imageProps}
    />
  ) : (
    <DefaultAvatar size={size} iconSize={size / 2} />
  );
}
