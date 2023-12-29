import React from 'react';
import {Pressable} from 'react-native';

import {useAuthSignIn} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {useForm} from 'react-hook-form';

import {Screen, Button, Text, FormTextInput, Logo} from '@components';

type LoginType = {
  email: string;
  password: string;
};

export function LoginScreen() {
  const navigation = useNavigation();
  const {signIn, isLoading} = useAuthSignIn();
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
    <Screen justifyContent="center" style={{paddingTop: 0}}>
      <Logo
        boxProps={{
          alignSelf: 'center',
          paddingBottom: 's12',
        }}
      />
      <FormTextInput
        control={control}
        textContentType="emailAddress"
        autoCapitalize="none"
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
        autoCapitalize="none"
        textContentType="password"
        rules={{
          required: true,
        }}
        secureTextEntry
        title="Senha"
        placeholder="********"
      />
      <Button
        isLoading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(handleOnPress)}
        marginBottom="s32"
        rightComponent
        title="ENTRAR"
      />
      <Pressable
        onPress={() => navigation.navigate('SignUpScreen')}
        style={{alignItems: 'center'}}>
        <Text
          color="primary"
          bold
          preset="paragraphSmall"
          textDecorationLine="underline">
          OU CADASTRE-SE
        </Text>
      </Pressable>
    </Screen>
  );
}
