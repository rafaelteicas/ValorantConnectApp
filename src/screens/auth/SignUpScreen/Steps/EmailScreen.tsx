import React from 'react';

import {Box, Button, FormTextInput, Loading, Screen, Text} from '@components';

import {useAppForm} from '@hooks';
import {AuthSignUpStackTypes} from '@routes';

import {signUpSchemaEmail} from '../signUpSchema';

export function EmailScreen({navigation}: AuthSignUpStackTypes<'EmailScreen'>) {
  const {control, formState, handleSubmit, getValues} = useAppForm(
    {email: ''},
    signUpSchemaEmail,
  );
  function handleOnPress() {
    navigation.navigate('PasswordScreen', {
      email: getValues('email'),
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="title" color="primary">
        Criar conta
      </Text>
      <Text color="backgroundContrast" mb="s32">
        Escolha um e-mail acessar sua conta
      </Text>
      <FormTextInput
        control={control}
        name="email"
        title="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Box justifyContent="center" alignItems="center">
        <Loading percentage={10} />
      </Box>
      <Box flex={1} justifyContent="flex-end">
        <Button
          disabled={!formState.isValid}
          title="Continuar"
          rightComponent
          onPress={handleSubmit(handleOnPress)}
        />
      </Box>
    </Screen>
  );
}
