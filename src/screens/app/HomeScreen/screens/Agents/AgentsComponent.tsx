import React from 'react';

import {Dimensions, ListRenderItemInfo} from 'react-native';

import {Image} from 'react-native';

import {CharactersType} from 'src/domain/Characters/charactersType';

import {Box} from '../../../../../components/Box/Box';
import {Text} from '../../../../../components/Text/Text';

export function AgentsComponent({item}: ListRenderItemInfo<CharactersType>) {
  const {width, height} = Dimensions.get('window');

  const DEFAULT_WIDTH = width * 0.3;
  const DEFAULT_HEIGHT = height * 0.3;

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
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
