import React from 'react';

import {Dimensions} from 'react-native';

import {useAuthSignUp} from '@domain';

import {Box, Button, FormTextInput, Loading, Screen, Text} from '@components';
import {useAppForm} from '@hooks';
import {AuthSignUpStackTypes} from '@routes';

interface dataType {
  riotId: string;
  tag: string;
  username: string;
}

export function ValorantData({route}: AuthSignUpStackTypes<'ValorantData'>) {
  const {email, password, confirmPassword} = route.params;
  const {signUp} = useAuthSignUp();
  const {control, formState, handleSubmit} = useAppForm({
    riotId: '',
    tag: '',
    username: '',
  });
  const {width} = Dimensions.get('window');
  function submitForm(data: dataType) {
    signUp({
      email,
      password,
      confirmPassword,
      riotId: `${data.riotId}#${data.tag}`,
      username: data.username,
    });
  }
  return (
    <Screen>
      <Text preset="title" color="primary">
        Criar conta
      </Text>
      <Text color="backgroundContrast" mb="s32">
        Agora digite seu Riot ID e a sua TAG
      </Text>
      <Box flexDirection="row">
        <FormTextInput
          name="riotId"
          control={control}
          title="RIOT ID"
          placeholder="Nome no game"
          boxProps={{
            width: width / 2 + 12,
            mr: 's12',
          }}
        />
        <FormTextInput
          name="tag"
          control={control}
          title="TAG"
          placeholder="#1234"
          boxProps={{
            width: width / 4 + 12,
          }}
        />
      </Box>
      <Text color="backgroundContrast" mb="s32">
        Escolha um username para usar no aplicativo!
      </Text>
      <FormTextInput
        name="username"
        control={control}
        title="Username"
        placeholder="Nome para o app!"
      />
      <Box justifyContent="center" alignItems="center">
        <Loading percentage={80} />
      </Box>
      <Box flex={1} justifyContent="flex-end">
        <Button
          disabled={!formState.isValid}
          title="Continuar"
          rightComponent
          onPress={handleSubmit(submitForm)}
        />
      </Box>
    </Screen>
  );
}
