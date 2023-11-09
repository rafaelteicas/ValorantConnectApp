import React from 'react';
import {ListRenderItemInfo, Image} from 'react-native';

import {CharactersType} from 'src/domain/Characters/charactersType';

import {Box} from '@components';

export function RenderAgent(data: ListRenderItemInfo<CharactersType>) {
  return (
    <Box>
      <Image
        source={{uri: data.item.smallIcon}}
        width={100}
        height={100}
        style={{marginLeft: 40}}
      />
    </Box>
  );
}
