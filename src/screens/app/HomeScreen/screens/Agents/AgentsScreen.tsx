import React, {useState} from 'react';

import {Dimensions} from 'react-native';

import {useGetCharacters} from '@domain';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import {Screen, SearchInput} from '@components';

import {AgentsComponent} from './AgentsComponent';

const {width} = Dimensions.get('window');

export function AgentsScreen() {
  const x = useSharedValue(0);
  const [search, setSearch] = useState('');
  const {agents} = useGetCharacters(search);
  const scrollHandler = useAnimatedScrollHandler(event => {
    x.value = event.contentOffset.x;
  });
  return (
    <Screen paddingVerticalOff paddingOff behavior="height">
      <SearchInput
        value={search}
        onChangeText={setSearch}
        placeholder="PESQUISE POR UM AGENTE"
        boxProps={{
          width: '90%',
          alignSelf: 'center',
        }}
      />
      <Animated.FlatList
        keyExtractor={agent => agent.id}
        horizontal
        data={agents}
        renderItem={data => <AgentsComponent {...data} />}
        bounces={false}
        snapToInterval={width * 0.5}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        onEndReachedThreshold={0.1}
        showsHorizontalScrollIndicator={false}
      />
    </Screen>
  );
}
