import React from 'react';
import {FlatList} from 'react-native';

import {useGetWeapons} from '@domain';

import {Box, Screen, Text} from '@components';

import {Weapons} from './WeaponsComponent';

export function WeaponsScreen() {
  const {weapons} = useGetWeapons();

  return (
    <Screen>
      <FlatList data={weapons} renderItem={data => <Weapons {...data} />} />
      <Box style={{marginBottom: 100}} />
    </Screen>
  );
}
