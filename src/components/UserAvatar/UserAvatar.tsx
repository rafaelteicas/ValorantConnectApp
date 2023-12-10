import React from 'react';
import {Image, ImageProps} from 'react-native';

interface Props extends Omit<ImageProps, 'source'> {
  profileImage?: string;
  size?: number;
  bordeRadius?: number;
}

export function UserAvatar({
  profileImage,
  size = 50,
  bordeRadius = size / 2,
  ...imageProps
}: Props) {
  return (
    <Image
      source={{uri: profileImage}}
      width={size}
      height={size}
      borderRadius={bordeRadius}
      style={{
        marginRight: 20,
      }}
      {...imageProps}
    />
  );
}
