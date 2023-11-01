import React from 'react';
import {FlatList} from 'react-native';

import {useGetWeapons} from '@domain';

import {Screen, Text} from '@components';

export function WeaponsScreen() {
  const {weapons} = useGetWeapons();

  return (
    <Screen>
      <FlatList
        data={weapons}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </Screen>
  );
}
