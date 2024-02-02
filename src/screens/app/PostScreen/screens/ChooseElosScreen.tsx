import React, {useState} from 'react';

import {Image, FlatList, ListRenderItemInfo, Pressable} from 'react-native';

import {Elos, useCreatePost, useGetElos, usePostList} from '@domain';

import {useNavigation} from '@react-navigation/native';

import {useModal} from '@service';

import {Box, Button, Screen, Text} from '@components';
import {PostScreenTypes} from '@routes';

export function ChooseElosScreen({route}: PostScreenTypes<'ChooseEloScreen'>) {
  const {fetchData} = usePostList();
  const navigation = useNavigation();
  const {elos} = useGetElos<Elos[]>();
  const SIZE = 80;
  const [selected, setSelected] = useState<string>('');
  const {showModal} = useModal();
  const {createPost} = useCreatePost({
    onSuccess: () => {
      fetchData();
      showModal('Sucesso!');
      // @ts-ignore
      navigation.navigate('FindTeamScreen');
    },
  });

  function toggleSelection(name: string) {
    setSelected(name);
  }

  function renderItem({item}: ListRenderItemInfo<Elos>) {
    if (item.name.includes('Unused') || item.name.includes('SEM RANQUE')) {
      return null;
    }
    return (
      <Pressable onPress={() => toggleSelection(item.name)}>
        <Box p="s12">
          <Box
            borderWidth={1}
            borderRadius="b12"
            borderColor={item.name === selected ? 'primary' : 'lightBox'}>
            <Image source={{uri: item.icon}} width={SIZE} height={SIZE} />
            <Box
              borderRadius="b12"
              width={SIZE}
              height={SIZE}
              backgroundColor="darkBox"
              position="absolute"
              opacity={item.name === selected ? 0 : 0.9}
            />
          </Box>
        </Box>
      </Pressable>
    );
  }

  function handleOnPress(elo: string) {
    const {agent, agents} = route.params;

    createPost({
      elo: elo,
      main: agent,
      other: agents,
    });
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
      <Button
        disabled={selected.length === 0 ? true : false}
        title="Continuar"
        rightComponent
        paddingHorizontalOn
        onPress={() => handleOnPress(selected)}
      />
    </Screen>
  );
}
