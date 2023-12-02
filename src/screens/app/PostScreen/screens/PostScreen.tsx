import React from 'react';

import {Box, Button, Input, Screen, Text} from '@components';
import {AppTopScreenProps} from '@routes';

export function PostScreen({navigation}: AppTopScreenProps<'PostScreen'>) {
  function handleNavigate() {
    navigation.navigate('ChooseMain');
  }

  return (
    <Box flex={1}>
      <Screen canGoBack>
        <Box justifyContent="center" flex={1}>
          <Text mb="s32" preset="heading" color="primary">
            NOME NO JOGO (RIOT ID)
          </Text>
          <Input placeholder="USERNAME" title="RIOT ID" />
        </Box>
      </Screen>
      <Button title="PROXIMO" rightComponent onPress={handleNavigate} />
    </Box>
  );
}
