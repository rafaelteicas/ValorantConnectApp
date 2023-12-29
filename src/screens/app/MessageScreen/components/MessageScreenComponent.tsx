import React from 'react';
import {Image, ImageProps, TouchableOpacity} from 'react-native';

import {Conversation, useGetProfileImage, useGetUserById} from '@domain';

import {useNavigation} from '@react-navigation/native';

import {Box, DefaultAvatar, Text} from '@components';

const AVATAR_SIZE = 60;

export function MessageScreenComponent({path, from}: Conversation) {
  const {user} = useGetUserById(from.toString());
  const {data} = useGetProfileImage(from);
  const navigation = useNavigation();
  function navigateToConversation() {
    navigation.navigate('ConversationScreenFromPath', {path: path});
  }
  return (
    <TouchableOpacity onPress={navigateToConversation}>
      <Box flexDirection="row" alignItems="center" p="s12">
        {data ? (
          <Image {...$imageStyle} source={{uri: data}} />
        ) : (
          <DefaultAvatar
            size={AVATAR_SIZE}
            borderRadius={AVATAR_SIZE / 3}
            iconSize={AVATAR_SIZE / 2}
          />
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
