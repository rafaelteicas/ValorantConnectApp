import React from 'react';

import {TouchableOpacity} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Box, Input, Screen, Button, Text} from '@components';
import {AuthStackParamList} from '@routes';

export function SignInScreen({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'SignInScreen'>) {
  return (
    <Screen>
      <Box padding="s32">
        <Input title="E-mail" placeholder="Digite seu e-mail" />
        <Input title="Senha" secureTextEntry placeholder="********" />
        <Button marginBottom="s32" rightComponent title="ENTRAR" />
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
