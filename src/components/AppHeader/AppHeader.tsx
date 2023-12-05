import React from 'react';

import {Image, ImageProps} from 'react-native';

import {useUserGetUser} from '@domain';

import {useAppSafeArea} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {SearchInput} from '../SearchInput/SearchInput';

const SIZE_PROFILE = 40;

export function AppHeader() {
  const {top} = useAppSafeArea();
  const {user} = useUserGetUser();
  console.log(user);

  return (
    <Box {...$boxStyle} style={{paddingTop: top}}>
      <SearchInput placeholder="DIGITE" />
      <Image {...$imageStyle} source={{uri: user.profileImage}} />
    </Box>
  );
}

const $boxStyle: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingHorizontal: 's16',
  pb: 's16',
};

const $imageStyle: Omit<ImageProps, 'source'> = {
  width: SIZE_PROFILE,
  height: SIZE_PROFILE,
  borderRadius: SIZE_PROFILE / 2,
  style: {
    marginLeft: 10,
  },
};
