import React from 'react';

import {TouchableOpacity} from 'react-native';

import {useAuthSignIn} from '@domain';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useForm} from 'react-hook-form';

import {Box, Screen, Button, Text, FormTextInput} from '@components';
import {AuthStackParamList} from '@routes';

type LoginType = {
  email: string;
  password: string;
};

export function SignInScreen({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'SignInScreen'>) {
  const {signIn} = useAuthSignIn();
  const {control, formState, handleSubmit} = useForm<LoginType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function handleOnPress({email, password}: LoginType) {
    signIn(email, password);
  }

  return (
    <Screen justifyContent="center">
      <Box>
        <FormTextInput
          control={control}
          textContentType="emailAddress"
          name="email"
          rules={{
            required: true,
          }}
          title="E-mail"
          placeholder="Digite seu e-mail"
        />

        <FormTextInput
          control={control}
          name="password"
          rules={{
            required: true,
          }}
          secureTextEntry
          title="Senha"
          placeholder="********"
        />

        <Button
          disabled={!formState.isValid}
          onPress={handleSubmit(handleOnPress)}
          marginBottom="s32"
          rightComponent
          title="ENTRAR"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={{alignItems: 'center'}}>
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
