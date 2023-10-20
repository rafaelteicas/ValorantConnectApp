import React from 'react';

import {Box, Input, Screen, Button} from '@components';

export function SignInScreen() {
  return (
    <Screen>
      <Box padding="s32">
        <Input title="E-mail" placeholder="Digite seu e-mail" />
        <Input title="Senha" secureTextEntry placeholder="********" />
        <Button rightComponent title="Entrar" />
      </Box>
    </Screen>
  );
}
