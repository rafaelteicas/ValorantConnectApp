import React from 'react';

import {Image, ListRenderItemInfo} from 'react-native';

import {StreamType, useDimensions} from '@domain';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

export function StreamSlide({item}: ListRenderItemInfo<StreamType>) {
  const {height, width} = useDimensions(300, 200);

  if (item) {
    return (
      <Box padding="s12">
        <Image source={{uri: item.thumbnailUrl}} style={{width, height}} />
        <Text preset="heading" color="primary">
          {item.userLogin}
        </Text>
      </Box>
    );
  } else {
    <Box>
      <Text preset="heading">DEU RUIM</Text>
    </Box>;
  }
}
