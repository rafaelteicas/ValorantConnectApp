import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {EmailScreen} from './Steps/EmailScreen';
import {PasswordScreen} from './Steps/PasswordScreen';
import {ValorantData} from './Steps/ValorantData';

export type SignUpAuthStackParamList = {
  EmailScreen: undefined;
  PasswordScreen: {
    email: string;
  };
  ValorantData: {
    email: string;
    password: string;
    confirmPassword: string;
  };
};

const Stack = createNativeStackNavigator<SignUpAuthStackParamList>();

export function SignUpScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="EmailScreen">
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="ValorantData" component={ValorantData} />
    </Stack.Navigator>
  );
}
