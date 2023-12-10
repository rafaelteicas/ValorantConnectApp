import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';

import {useGetCharacters} from '@domain';
import {CharactersType} from 'src/domain/Characters/charactersType';

import {Box, Button, Screen, Text} from '@components';
import {PostScreenTypes} from '@routes';

const {width, height} = Dimensions.get('window');
const SIZE = 80;

export function ChooseAgentScreen({
  navigation,
}: PostScreenTypes<'ChooseAgentScreen'>) {
  const {agents} = useGetCharacters();
  const [key, setKey] = useState(0);

  if (!agents) {
    return;
  }
  function handleNavigate(agent: string) {
    console.log(agent);

    navigation.navigate('ChooseSecondaryAgents');
  }

  function renderItemAgent({item, index}: ListRenderItemInfo<CharactersType>) {
    return (
      <TouchableOpacity onPress={() => setKey(index)}>
        <Box
          backgroundColor="darkBox"
          borderRadius="b12"
          borderWidth={1}
          borderColor="primary"
          marginLeft="s16">
          <Image source={{uri: item.smallIcon}} width={SIZE} height={SIZE} />
        </Box>
      </TouchableOpacity>
    );
  }
  return (
    <Screen paddingOff>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text preset="title" color="primary" mb="s16">
          ESCOLHA SEU MAIN
        </Text>
        <Image
          source={{uri: agents[key].image}}
          width={width}
          height={height * 0.55}
          resizeMode="cover"
        />
        <Text preset="title" color="primary">
          {agents[key].name.toUpperCase()}
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={agents}
          renderItem={renderItemAgent}
        />
      </Box>
      <Button
        title="Continuar"
        rightComponent
        paddingHorizontalOn
        onPress={() => handleNavigate(agents[key].name)}
      />
    </Screen>
  );
}
