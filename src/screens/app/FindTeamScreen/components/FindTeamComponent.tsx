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

import {FindBoxComponent} from './FindBoxComponent';
import {FindBoxIconComponent} from './FindBoxIconComponent';

const SIZE = 50;
const SMALL_SIZE = 40;

export function FindTeamBoxComponent({item}: ListRenderItemInfo<Post>) {
  const {agents} = useGetCharacters(item.main);
  const {user} = useGetUserById(item.userId.toString());
  const {elos} = useGetElos<Elos>(item.elo);
  const images: string[] = [];
  item.other.map(item => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {agents} = useGetCharacters(item);
    images.push(agents ? agents[0].smallIcon : '');
  });
  if (!user || !elos) {
    return null;
  }
  return (
    <Box {...$boxStyles}>
      <Box flexDirection="row" alignItems="center" mb="s12">
        <UserAvatar profileImage={user?.profileImage} />
        <Text color="primary">{user?.username}</Text>
        <FindBoxIconComponent username={user.username} />
      </Box>
      <FindBoxComponent title="MAIN">
        {agents && (
          <Image
            source={{uri: agents[0].smallIcon}}
            width={SIZE}
            height={SIZE}
            borderRadius={SIZE / 2}
          />
        )}
      </FindBoxComponent>
      <FindBoxComponent title="OUTROS AGENTES">
        <Box flexDirection="row">
          {images.map(image => (
            <Image
              source={{uri: image}}
              width={SMALL_SIZE}
              height={SMALL_SIZE}
              borderRadius={SMALL_SIZE / 2}
            />
          ))}
        </Box>
      </FindBoxComponent>
      <Box {...$bottomBoxStyles}>
        <Text preset="heading" textAlign="right" color="primary">
          {user?.riotId}
        </Text>
        <Image
          source={{uri: elos?.icon}}
          width={SMALL_SIZE}
          height={SMALL_SIZE}
          style={{marginLeft: 24}}
        />
      </Box>
    </Box>
  );
}

const $boxStyles: BoxProps = {
  backgroundColor: 'darkBox',
  padding: 's24',
};

const $bottomBoxStyles: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  p: 's12',
  alignItems: 'center',
};
