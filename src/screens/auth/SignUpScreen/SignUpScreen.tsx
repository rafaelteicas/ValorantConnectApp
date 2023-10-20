import React from 'react';

import {Box, Button, Input, Screen} from '@components';

export function SignUpScreen() {
  return (
    <Screen>
      <Box padding="s32">
        <Input title="DIGITE SEU E-MAIL" placeholder="email@email.com" />
        <Input title="CONFIRME SEU EMAIL" placeholder="email@email.com" />
        <Input
          title="DIGITE SUA SENHA"
          secureTextEntry
          placeholder="********"
        />
        <Input
          title="CONFIRME SUA SENHA"
          secureTextEntry
          placeholder="********"
        />

        <Button title="CADASTRAR" />
      </Box>
    </Screen>
  );
}
