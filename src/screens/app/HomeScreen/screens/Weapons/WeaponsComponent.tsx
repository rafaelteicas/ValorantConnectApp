import React from 'react';

import {Dimensions, Image, ListRenderItemInfo} from 'react-native';

import {WeaponsTypes} from 'src/domain/Weapons/weaponsTypes';

import {Box, Text} from '@components';

export function Weapons({item}: ListRenderItemInfo<WeaponsTypes>) {
  const {width} = Dimensions.get('window');
  return (
    <Box
      width={width}
      height={100}
      justifyContent="center"
      alignItems="center"
      backgroundColor="darkBox">
      <Image source={{uri: item.image}} width={200} height={50} />
      <Text color="backgroundContrast">{item.name}</Text>
    </Box>
  );
}
