import React from 'react';

import {FlatList} from 'react-native';

import {useGetCharacters} from '@domain';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Box, Screen, SearchInput} from '@components';

import {AgentsComponent} from './AgentsComponent';

export function AgentsScreen() {
  const {agents} = useGetCharacters();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Screen>
        <Box ml="s32" mr="s32">
          <SearchInput placeholder="PESQUISE POR UM AGENTE" />
          <FlatList
            data={agents?.slice(0, 4)}
            keyExtractor={agent => agent.id}
            numColumns={2}
            renderItem={data => <AgentsComponent {...data} />}
          />
        </Box>
      </Screen>
    </SafeAreaView>
  );
}
