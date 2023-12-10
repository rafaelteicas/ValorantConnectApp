import React from 'react';
import {Dimensions, FlatList} from 'react-native';

import {useGetWeapons} from '@domain';

import {Box, Screen} from '@components';

import {WeaponsComponent} from './WeaponsComponent';

export function WeaponsScreen() {
  const {weapons} = useGetWeapons();

  return (
    <Screen paddingOff paddingVerticalOff>
      <FlatList
        data={weapons}
        renderItem={data => <WeaponsComponent {...data} />}
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
