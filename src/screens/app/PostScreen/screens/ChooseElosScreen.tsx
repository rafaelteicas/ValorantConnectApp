import React, {useState} from 'react';

import {Image, FlatList, ListRenderItemInfo, Pressable} from 'react-native';

import {Elos, useGetElos} from '@domain';

import {Box, Button, Screen, Text} from '@components';
import {PostScreenTypes} from '@routes';

export function ChooseElosScreen({route}: PostScreenTypes<'ChooseEloScreen'>) {
  const {elos} = useGetElos<Elos[]>();
  const SIZE = 80;
  const [selected, setSelected] = useState<string>('');

  function toggleSelection(name: string) {
    setSelected(name);
  }

  function renderItem({item}: ListRenderItemInfo<Elos>) {
    if (item.name.includes('Unused') || item.name.includes('SEM RANQUE')) {
      return null;
    }
    return (
      <Pressable onPress={() => toggleSelection(item.name)}>
        <Box
          p="s4"
          m="s8"
          borderWidth={1}
          borderRadius="b12"
          borderColor={item.name === selected ? 'primary' : 'lightBox'}>
          <Image source={{uri: item.icon}} width={SIZE} height={SIZE} />
        </Box>
      </Pressable>
    );
  }

  return (
    <Screen paddingOff>
      <Box flex={1} alignItems="center">
        <Text preset="title" color="primary" mb="s20">
          SELECIONE SEU ELO ATUAL
        </Text>
        <FlatList
          keyExtractor={item => item.name}
          data={elos}
          renderItem={renderItem}
          numColumns={3}
          style={{flex: 1}}
        />
      </Box>
      <Button title="Continuar" rightComponent paddingHorizontalOn />
    </Screen>
  );
}

//  {elos.map((item, index) => {
//             if (item.name.includes('Unused')) {
//               return null;
//             }
//             return (
//               <Pressable onPress={() => setKey(index)}>
//                 <Box
//                   height={SIZE * 2}
//                   ml="s24"
//                   p="s12"
//                   justifyContent="center"
//                   alignItems="center"
//                   borderColor={index === key ? 'primary' : 'backgroundContrast'}
//                   borderRadius="b12"
//                   borderWidth={1}>
//                   <Image
//                     source={{uri: item.icon}}
//                     width={SIZE * 0.8}
//                     height={SIZE * 0.8}
//                   />
//                   <Text
//                     color={index === key ? 'primary' : 'backgroundContrast'}
//                     textAlign="center">
//                     {item.name}
//                   </Text>
//                 </Box>
//               </Pressable>
//             );
//           })}
