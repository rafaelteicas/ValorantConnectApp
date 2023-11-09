import React from 'react';

import {Box, Button, Input, Screen, Text} from '@components';
import {AppTopScreenProps} from '@routes';

export function PostScreen({navigation}: AppTopScreenProps<'PostScreen'>) {
  function handleNavigate() {
    navigation.navigate('ChooseMain');
  }

  return (
    <Screen canGoBack>
      <Box p="s32" justifyContent="center" alignItems="center" flex={1}>
        <Text mb="s32" preset="heading" color="primary">
          NOME NO JOGO (RIOT ID)
        </Text>
        <Box flexDirection="row">
          <Input placeholder="USERNAME" title="RIOT ID" mr="s12" flex={1} />
          <Input placeholder="#1234" flex={0.5} />
        </Box>
      </Box>
      <Button title="PROXIMO" rightComponent onPress={handleNavigate} />
    </Screen>
  );
}
