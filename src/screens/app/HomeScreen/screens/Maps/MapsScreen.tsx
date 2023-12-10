import React from 'react';

import {FlatList} from 'react-native';

import {useGetMaps} from '@domain';

import {Screen} from '@components';

import {MapsComponent} from './MapsComponent';

export function MapsScreen() {
  const {maps} = useGetMaps();
  return (
    <Screen paddingOff paddingVerticalOff>
      <FlatList data={maps} renderItem={item => <MapsComponent {...item} />} />
    </Screen>
  );
}
