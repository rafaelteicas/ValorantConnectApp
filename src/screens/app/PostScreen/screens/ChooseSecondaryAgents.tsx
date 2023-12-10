import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {useGetCharacters} from '@domain';
import {CharactersType} from 'src/domain/Characters/charactersType';

import {Box, Button, Screen, Text} from '@components';
import {PostScreenTypes} from '@routes';

const SIZE = 100;

export function ChooseSecondaryAgents({
  navigation,
}: PostScreenTypes<'ChooseSecondaryAgents'>) {
  const {agents} = useGetCharacters();
  const [selected, setSelected] = useState<string[]>([]);

  if (!agents) {
    return;
  }
  function handleNavigate(agent: string) {
    navigation.navigate('ChooseEloScreen', {
      agent: agent,
    });
  }

  const arraySelected: string[] = [];
  function toggleMultipleSelect(agentName: string) {
    const includes = selected.includes(agentName);
    if (selected.length >= 3 && !includes) {
      Alert.alert('PASSOU!');
    } else if (includes) {
      const newArray = selected.filter(names => names !== agentName);
      setSelected(newArray);
    } else {
      arraySelected.push(agentName);
      setSelected(prev => [...prev, ...arraySelected]);
    }
  }

  function renderItemAgent({item}: ListRenderItemInfo<CharactersType>) {
    const map = selected.map(agent => agent).includes(item.name);
    return (
      <Pressable
        onPress={() => toggleMultipleSelect(item.name)}
        style={{marginLeft: 16}}>
        <Box
          backgroundColor="darkBox"
          borderRadius="b12"
          borderWidth={1}
          borderColor={map ? 'primary' : 'backgroundColor'}
          justifyContent="center"
          alignItems="center"
          mb="s16">
          <Image
            source={{uri: item.smallIcon}}
            width={SIZE}
            height={SIZE}
            style={{
              borderRadius: 12,
            }}
          />
          <Box
            borderRadius="b12"
            width={SIZE}
            height={SIZE}
            backgroundColor="darkBox"
            position="absolute"
            opacity={map ? 0 : 0.9}
          />
        </Box>
      </Pressable>
    );
  }
  return (
    <Screen paddingOff>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text preset="title" color="primary" mb="s16">
          ESCOLHA SEU MAIN
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={agents}
          renderItem={renderItemAgent}
          numColumns={3}
        />
      </Box>
      <Button
        title="Continuar"
        rightComponent
        paddingHorizontalOn
        onPress={() => handleNavigate('')}
      />
    </Screen>
  );
}
