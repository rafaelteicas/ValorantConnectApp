import React from 'react';

import {Box, Button, FormTextInput, Loading, Screen, Text} from '@components';
import {useAppForm} from '@hooks';
import {AuthSignUpStackTypes} from '@routes';

import {signUpSchemaPassword} from '../signUpSchema';

export function PasswordScreen({
  navigation,
  route,
}: AuthSignUpStackTypes<'PasswordScreen'>) {
  const {control, formState, handleSubmit, getValues} = useAppForm(
    {
      password: '',
      confirmPassword: '',
    },
    signUpSchemaPassword,
  );
  const {password, confirmPassword} = getValues();
  function sendPasswordForm() {
    navigation.navigate('ValorantData', {
      email: route.params.email,
      password,
      confirmPassword,
    });
  }
  return (
    <Screen>
      <Text preset="title" color="primary">
        Criar conta
      </Text>
      <Text color="backgroundContrast" mb="s32">
        Digite uma senha segura! A sua senha deve ter no mínimo 8 caracteres.
      </Text>
      <FormTextInput
        control={control}
        name="password"
        title="Senha"
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <FormTextInput
        control={control}
        name="confirmPassword"
        title="Confirme sua senha"
        placeholder="Digite novamente a senha que você escolheu!"
        secureTextEntry
      />
      <Box justifyContent="center" alignItems="center">
        <Loading title="2/3" percentage={40} />
      </Box>
      <Box flex={1} justifyContent="flex-end">
        <Button
          disabled={!formState.isValid}
          title="Continuar"
          rightComponent
          onPress={handleSubmit(sendPasswordForm)}
        />
      </Box>
    </Screen>
  );
}
