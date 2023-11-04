import React from 'react';

import {Alert, TouchableOpacity} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Controller, useForm} from 'react-hook-form';

import {Box, Input, Screen, Button, Text, FormTextInput} from '@components';
import {AuthStackParamList} from '@routes';

type LoginType = {
  email: string;
  password: string;
};

export function SignInScreen({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'SignInScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleOnPress({email, password}: LoginType) {
    Alert.alert(email, password);
  }

  return (
    <Screen justifyContent="center">
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

        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
          }}
          render={({field}) => (
            <Input
              onChangeText={field.onChange}
              value={field.value}
              title="Senha"
              secureTextEntry
              placeholder="********"
            />
          )}
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
