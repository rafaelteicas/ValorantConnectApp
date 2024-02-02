import React from 'react';
import {Image, ImageProps, TouchableOpacity} from 'react-native';

import {useGetProfileImage, useGetUserById} from '@domain';

import {useNavigation} from '@react-navigation/native';

import {Box, DefaultAvatar, Text} from '@components';

const AVATAR_SIZE = 60;

export function MessageScreenComponent(item: any) {
  const {user} = useGetUserById(item.from);
  const {data} = useGetProfileImage(item.from);
  const navigation = useNavigation();
  function navigateToConversation() {
    navigation.navigate('ConversationScreenFromPath', {path: item.path});
  }
  return (
    <TouchableOpacity onPress={navigateToConversation}>
      <Box flexDirection="row" alignItems="center" p="s12">
        {data ? (
          <Image {...$imageStyle} source={{uri: data}} />
        ) : (
          <DefaultAvatar size={AVATAR_SIZE} iconSize={AVATAR_SIZE / 2} />
        )}
        <Box ml="s16">
          <Text>{user?.username}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
const $imageStyle: Omit<ImageProps, 'source'> = {
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  borderRadius: AVATAR_SIZE / 3,
};
