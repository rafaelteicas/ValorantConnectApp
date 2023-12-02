import React from 'react';

import {
  Dimensions,
  Image,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {WeaponsTypes} from 'src/domain/Weapons/weaponsTypes';

import {Box, Text} from '@components';

export function WeaponsComponent({item}: ListRenderItemInfo<WeaponsTypes>) {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('WeaponScreen', {uuid: item.uuid})}>
      <Box
        width={width}
        height={100}
        justifyContent="center"
        alignItems="center"
        backgroundColor="darkBox">
        <Image source={{uri: item.image}} width={200} height={50} />
        <Text color="backgroundContrast">{item.name}</Text>
      </Box>
    </TouchableOpacity>
  );
}
