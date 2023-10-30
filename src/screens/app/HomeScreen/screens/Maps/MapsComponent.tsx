import React from 'react';

import {Image, ListRenderItemInfo} from 'react-native';

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
  return (
    <Box padding="s32" marginBottom="s16">
      <Box backgroundColor="darkBox" padding="s28" borderRadius="b12">
        <Box flexDirection="row" width={230}>
          <Image source={{uri: item.splash}} width={100} height={100} />
          <Text ml="s24" preset="paragraphSmall" color="backgroundContrast">
            {item.narrativeDescription}
          </Text>
        </Box>
        <Text preset="heading" color="backgroundContrast">
          {item.displayName}
        </Text>
      </Box>
    </Box>
  );
}
