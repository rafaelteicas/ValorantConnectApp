import React from 'react';
import {Dimensions, FlatList} from 'react-native';

import {useGetWeapons} from '@domain';

import {Box, Screen} from '@components';

import {Weapons} from './WeaponsComponent';

export function WeaponsScreen() {
  const {weapons} = useGetWeapons();

  return (
    <Screen style={{paddingHorizontal: 0, paddingBottom: 0}}>
      <FlatList
        data={weapons}
        renderItem={data => <Weapons {...data} />}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </Screen>
  );
}

function renderItemSeparator() {
  return (
    <Box
      backgroundColor="primary"
      width={Dimensions.get('screen').width}
      height={1}
    />
  );
}
