import React from 'react';

import {Dimensions, Image, ListRenderItemInfo} from 'react-native';

import {MapsTypes} from 'src/domain/Maps/mapsTypes';

import {Box, Text} from '@components';

export function MapsComponent({item}: ListRenderItemInfo<MapsTypes>) {
  const {width} = Dimensions.get('screen');
  return (
    <Box marginBottom="s16">
      <Image source={{uri: item.splash}} width={width} height={100} />
      <Text preset="heading" color="backgroundContrast" textAlign="center">
        {item.displayName}
      </Text>
    </Box>
  );
}
