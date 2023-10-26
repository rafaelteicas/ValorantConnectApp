import React from 'react';

import {FlatList} from 'react-native';

import {useGetCharacters} from '@domain';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AgentsComponent, Screen} from '@components';

export function AgentsScreen() {
  const {agents} = useGetCharacters();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Screen>
        <FlatList
          data={agents?.slice(0, 4)}
          keyExtractor={agent => agent.id}
          numColumns={2}
          renderItem={data => <AgentsComponent {...data} />}
        />
      </Screen>
    </SafeAreaView>
  );
}
