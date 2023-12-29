import React from 'react';

import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {SkinTypes, useGetWeaponsByUuid} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppTopScreenProps} from '@routes';

export function WeaponScreen({route}: AppTopScreenProps<'WeaponScreen'>) {
  const {skins} = useGetWeaponsByUuid(route.params.uuid);

  return (
    <Screen canGoBack>
      <FlatList data={skins} renderItem={renderItem} />
    </Screen>
  );
}

function renderItem({item}: ListRenderItemInfo<SkinTypes>) {
  const {width} = Dimensions.get('screen');

  if (
    !item.image ||
    item.name.includes('Padrão') ||
    item.name.includes('aleatória')
  ) {
    return null;
  }

  return (
    <Box justifyContent="center" alignItems="center">
      <Text preset="paragraphMedium" color="backgroundContrast">
        {item.name}
      </Text>
      <Image
        source={{uri: item.image}}
        width={width}
        height={200}
        resizeMode="center"
      />
    </Box>
  );
}
