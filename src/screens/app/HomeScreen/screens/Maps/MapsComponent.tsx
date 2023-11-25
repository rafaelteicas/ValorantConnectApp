import React from 'react';

import {Dimensions, Image, ListRenderItemInfo} from 'react-native';

import {MapsTypes} from 'src/domain/Maps/mapsType';

import {Box, Text} from '@components';

export function MapsComponent({item}: ListRenderItemInfo<MapsTypes>) {
  if (item.displayName === 'District') {
    return null;
  }
  if (item.displayName === 'Piazza') {
    return null;
  }
  if (item.displayName === 'Kasbah') {
    return null;
  }
  if (item.displayName === 'The Range') {
    return null;
  }
  const {width} = Dimensions.get('screen');
  return (
    <Box marginBottom="s16">
      <Image source={{uri: item.splash}} width={width} height={100} />
      <Text preset="heading" color="backgroundContrast">
        {item.displayName}
      </Text>
    </Box>
  );
}
