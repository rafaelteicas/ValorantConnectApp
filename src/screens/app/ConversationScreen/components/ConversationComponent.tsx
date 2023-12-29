import React from 'react';

import {Image, ImageProps} from 'react-native';

import {useGetProfileImage, useGetUserById} from '@domain';
import {useAuthContext} from '@service';

import {Box, DefaultAvatar, Text} from '@components';

const SIZE = 40;

export default function ConversationComponent(item: any) {
  const {auth} = useAuthContext();
  const {data} = useGetProfileImage(item.data.userId);

  const position = auth?.user.id !== item.data.userId ? 'flex-end' : undefined;

  const Avatar = getAvatarImage(data);
  return (
    <Box alignItems={position}>
      <Box flexDirection="row" alignItems="center" g="s12" mb="s12">
        {position === 'flex-end' ? (
          <>
            <Text>{item.data.message}</Text>
            {Avatar}
          </>
        ) : (
          <>
            {Avatar}
            <Text>{item.data.message}</Text>
          </>
        )}
      </Box>
    </Box>
  );
}

function getAvatarImage(image?: string) {
  if (image) {
    return <Image source={{uri: image}} {...$imageStyle} />;
  }
  return <DefaultAvatar size={SIZE} borderRadius={SIZE / 3} iconSize={20} />;
}

const $imageStyle: Omit<ImageProps, 'source'> = {
  width: SIZE,
  height: SIZE,
  borderRadius: SIZE / 3,
  style: {
    marginLeft: 10,
  },
};
