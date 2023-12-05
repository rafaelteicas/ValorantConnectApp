import React, {useState} from 'react';

import {FlatList} from 'react-native';

import {useGetCharacters} from '@domain';

import {Screen} from '@components';

import {AgentsComponent} from './AgentsComponent';

export function AgentsScreen() {
  const [search] = useState('');
  const {agents} = useGetCharacters(search);
  return (
    <Screen paddingOff>
      <FlatList
        data={agents?.slice(0, 4)}
        keyExtractor={agent => agent.id}
        numColumns={2}
        renderItem={data => <AgentsComponent {...data.item} />}
      />
    </Screen>
  );
}
