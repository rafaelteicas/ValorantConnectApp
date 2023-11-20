import React from 'react';

import {useForm} from 'react-hook-form';

import {Box, Button, FormTextInput, Screen} from '@components';

type SignUpType = {
  email: string;
  emailConfirmation: string;
  password: string;
  passwordConfirmation: string;
};

export function SignUpScreen() {
  const {control, formState} = useForm<SignUpType>({
    defaultValues: {
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onSubmit',
  });
  return (
    <Screen canGoBack>
      <Box padding="s32">
        <FormTextInput
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          title="E-mail"
          placeholder="Digite seu e-mail"
        />
        <FormTextInput
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          title="E-mail"
          placeholder="Confirme seu e-mail"
        />
        <FormTextInput
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          title="Password"
          placeholder="Digite sua senha"
        />
        <FormTextInput
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          title="Password"
          placeholder="Confirme sua senha"
        />
        <Button disabled={!formState.isValid} title="CADASTRAR" />
      </Box>
    </Screen>
  );
}
