import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen, SignUpScreen} from '@screens';

import {AuthStackParamList} from './AuthStackParams';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignInScreen">
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
