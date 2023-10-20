import React from 'react';

import {TouchableOpacity} from 'react-native';

import {Box, Input, Screen, Button, Text} from '@components';

export function SignInScreen() {
  return (
    <Screen>
      <Box padding="s32">
        <Input title="E-mail" placeholder="Digite seu e-mail" />
        <Input title="Senha" secureTextEntry placeholder="********" />
        <Button marginBottom="s32" rightComponent title="ENTRAR" />
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Text
            color="primary"
            bold
            preset="paragraphSmall"
            textDecorationLine="underline">
            OU CADASTRE-SE
          </Text>
        </TouchableOpacity>
      </Box>
    </Screen>
  );
}
