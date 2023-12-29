import React from 'react';

import {Dimensions, Image, ListRenderItemInfo, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {WeaponsTypes} from 'src/domain/Weapons/weaponsTypes';

import {Box, Text} from '@components';

export function WeaponsComponent({item}: ListRenderItemInfo<WeaponsTypes>) {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('WeaponScreen', {uuid: item.uuid})}>
      <Box
        width={width}
        height={height / 6}
        justifyContent="center"
        alignItems="center"
        backgroundColor="darkBox">
        <Image
          source={{uri: item.image}}
          width={width}
          height={100}
          resizeMode="center"
        />
        <Text color="backgroundContrast">{item.name}</Text>
      </Box>
    </Pressable>
  );
}
