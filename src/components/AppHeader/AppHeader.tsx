import React from 'react';

import {Image, ImageProps, Platform} from 'react-native';

import {useGetProfileImage} from '@domain';

import {useAuthContext} from '@service';

import {Box, BoxProps} from '../Box/Box';
import {DefaultAvatar} from '../DefaultAvatar/DefaultAvatar';
import {Logo} from '../Logo/Logo';

const SIZE_PROFILE = 40;

export function AppHeader() {
  const {auth} = useAuthContext();
  if (!auth) {
    return;
  }
  const {data} = useGetProfileImage(auth.user.id);
  return (
    <Box {...$boxStyle}>
      <Box width={SIZE_PROFILE} height={SIZE_PROFILE} />
      <Logo size={100} />
      <Box flexDirection="row" alignItems="center">
        {data ? (
          <Image {...$imageStyle} source={{uri: data}} />
        ) : (
          <DefaultAvatar
            size={SIZE_PROFILE}
            borderRadius={SIZE_PROFILE / 3}
            iconSize={20}
          />
        )}
      </Box>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 's16',
  style: {
    marginTop: Platform.OS === 'android' ? -20 : null,
  },
};

const $imageStyle: Omit<ImageProps, 'source'> = {
  width: SIZE_PROFILE,
  height: SIZE_PROFILE,
  borderRadius: SIZE_PROFILE / 3,
  style: {
    marginLeft: 10,
  },
};
