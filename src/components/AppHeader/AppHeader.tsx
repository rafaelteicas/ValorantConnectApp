import React from 'react';

import {Image, ImageProps} from 'react-native';

import {useUserGetUser} from '@domain';

import {Box, BoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

const SIZE_PROFILE = 40;

export function AppHeader() {
  const {user, isLoading} = useUserGetUser();

  return (
    <Box {...$boxStyle}>
      <Text color="primary">{isLoading ? 'Username' : user?.username}</Text>
      <Image
        {...$imageStyle}
        source={{uri: isLoading ? '_' : user?.profileImage}}
      />
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
