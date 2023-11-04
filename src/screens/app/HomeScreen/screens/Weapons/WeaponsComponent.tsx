import React from 'react';

import {Image, ListRenderItemInfo} from 'react-native';

import {WeaponsTypes} from 'src/domain/Weapons/weaponsTypes';

import {Box, Text} from '@components';

export function Weapons({item}: ListRenderItemInfo<WeaponsTypes>) {
  return (
    <Box justifyContent="center" alignItems="center">
      <Text preset="paragraphSmall" color="backgroundContrast">
        {item.name}
      </Text>
      <Image source={{uri: item.image}} width={140} height={50} />
    </Box>
  );
}
