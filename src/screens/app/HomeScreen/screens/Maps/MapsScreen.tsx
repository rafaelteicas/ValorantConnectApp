import React from 'react';

import {FlatList} from 'react-native';

import {useGetMaps} from '@domain';

import {Screen} from '@components';

import {MapsComponent} from './MapsComponent';

export function MapsScreen() {
  const {maps} = useGetMaps();
  return (
    <Screen style={{paddingHorizontal: 0, paddingBottom: 0}}>
      <FlatList data={maps} renderItem={item => <MapsComponent {...item} />} />
    </Screen>
  );
}
