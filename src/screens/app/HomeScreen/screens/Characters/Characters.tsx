import React from 'react';

import {Dimensions, FlatList, ListRenderItemInfo} from 'react-native';

import {Image} from 'react-native';

import {useGetCharacters} from '@domain';
import {CharactersType} from 'src/domain/Characters/charactersType';

import {Box} from '../../../../../components/Box/Box';
import {Text} from '../../../../../components/Text/Text';

function CharactersComponent({item}: ListRenderItemInfo<CharactersType>) {
  const {width, height} = Dimensions.get('window');

  const DEFAULT_WIDTH = width * 0.3;
  const DEFAULT_HEIGHT = height * 0.3;
  return (
    <Box justifyContent="center" alignItems="center" m="s32">
      <Image
        source={{uri: item.background}}
        width={DEFAULT_WIDTH}
        height={DEFAULT_HEIGHT}
        style={{position: 'absolute', opacity: 0.2}}
      />
      <Image
        source={{uri: item.image}}
        width={DEFAULT_WIDTH}
        height={DEFAULT_HEIGHT}
      />
      <Text preset="heading" color="primary">
        {item.name}
      </Text>
    </Box>
  );
}

export function Characters() {
  const {agents} = useGetCharacters();

  return (
    <FlatList
      data={agents?.slice(0, 4)}
      keyExtractor={agent => agent.id}
      numColumns={2}
      renderItem={data => <CharactersComponent {...data} />}
    />
  );
}
