import React from 'react';

import {Dimensions, Image, ListRenderItemInfo, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {WeaponsTypes} from 'src/domain/Weapons/weaponsTypes';

import {Box, Text} from '@components';

export function WeaponsComponent({item}: ListRenderItemInfo<WeaponsTypes>) {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const {widthImage, heightImage} = getSize(item.name);

  return (
    <Pressable
      onPress={() => navigation.navigate('WeaponScreen', {uuid: item.uuid})}>
      <Box
        width={width}
        height={height / 6}
        p="s20"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="darkBox">
        <Image
          source={{uri: item.image}}
          width={widthImage}
          height={heightImage}
        />
        <Text color="backgroundContrast">{item.name}</Text>
      </Box>
    </Pressable>
  );
}

function getSize(name: string): {widthImage: number; heightImage: number} {
  if (
    name.includes('Frenzy') ||
    name.includes('Classic') ||
    name.includes('Ghost')
  ) {
    return {
      widthImage: 140,
      heightImage: 100,
    };
  }
  return {
    widthImage: 400,
    heightImage: 100,
  };
}
