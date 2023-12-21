import React from 'react';

import {Image, ImageProps} from 'react-native';

import {useUserGetUser} from '@domain';

import {Box, BoxProps} from '../Box/Box';
import {DefaultAvatar} from '../DefaultAvatar/DefaultAvatar';
import {Text} from '../Text/Text';

const SIZE_PROFILE = 40;

export function AppHeader() {
  const {user, isLoading} = useUserGetUser();
  if (!isLoading && user) {
    return (
      <Box {...$boxStyle}>
        {user.profileImage ? (
          <Image {...$imageStyle} source={{uri: user.profileImage}} />
        ) : (
          <DefaultAvatar
            size={SIZE_PROFILE}
            borderRadius={SIZE_PROFILE / 3}
            iconSize={20}
          />
        )}
        <Text color="primary" ml="s12">
          {user.username}
        </Text>
      </Box>
    );
  }
}

const $boxStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 's16',
  pb: 's16',
};

const $imageStyle: Omit<ImageProps, 'source'> = {
  width: SIZE_PROFILE,
  height: SIZE_PROFILE,
  borderRadius: SIZE_PROFILE / 3,
  style: {
    marginLeft: 10,
  },
};
