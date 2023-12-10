import React from 'react';

import {Image, ListRenderItemInfo} from 'react-native';

import {
  Elos,
  Post,
  useGetCharacters,
  useGetElos,
  useGetUserById,
} from '@domain';

import {Box, BoxProps, Text, UserAvatar} from '@components';

export function FindTeamBoxComponent({item}: ListRenderItemInfo<Post>) {
  const {agents} = useGetCharacters(item.main);
  const {user} = useGetUserById(item.userId.toString());
  const {elos} = useGetElos<Elos>(item.elo);

  if (!user || !elos) {
    return null;
  }
  return (
    <Box {...$boxStyles}>
      <Box flexDirection="row" alignItems="center">
        <UserAvatar profileImage={user?.profileImage} />
        <Box>
          <Text color="primary">{user?.username}</Text>
          <Text color="backgroundContrast">{item.message}</Text>
        </Box>
      </Box>
      <Box flexDirection="row" justifyContent="flex-end">
        <Box alignItems="center">
          <Text color="primary">MAIN</Text>
          {agents && (
            <Image source={{uri: agents[0].smallIcon}} width={50} height={50} />
          )}
        </Box>
        <Box alignItems="center">
          <Text color="primary">ELO</Text>
          <Image source={{uri: elos?.icon}} width={50} height={50} />
        </Box>
      </Box>
      <Box mt="s16" height={1} backgroundColor="backgroundContrast" />
      <Text textAlign="right" color="primary">
        {user?.riotId}
      </Text>
    </Box>
  );
}

const $boxStyles: BoxProps = {
  borderColor: 'darkBox',
  justifyContent: 'center',
  backgroundColor: 'darkBox',
  p: 's16',
};
