import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen} from '@screens';

import {AuthStackParamList} from './AuthStackParams';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}
