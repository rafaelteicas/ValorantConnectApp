import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';

import {useGetCharacters} from '@domain';

import {Box, Button, Screen, Text} from '@components';

import {RenderAgent} from './components/RenderAgent';

export function ChooseMain() {
  const {agents} = useGetCharacters();
  const [key, setKey] = useState(0);

  if (!agents) {
    return;
  }

  return (
    <Box flex={1}>
      <Screen canGoBack>
        <Box>
          <Box alignItems="center" p="s32">
            <Text color="primary" preset="title">
              ESCOLHA SEU MAIN
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={agents}
              renderItem={item => (
                <TouchableOpacity onPress={() => setKey(item.index)}>
                  <RenderAgent {...item} />
                </TouchableOpacity>
              )}
            />
            <Image source={{uri: agents[key].image}} width={300} height={300} />
            <Text preset="heading" color="primary">
              QUAL O SEU ELO?
            </Text>
          </Box>
        </Box>
      </Screen>
      <Button title="ENVIAR" rightComponent />
    </Box>
  );
}
