import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAuthContext} from '@service';

import {AppStackNavigator, AuthStackNavigator} from '@routes';

export function Navigator() {
  const {auth} = useAuthContext();

  return (
    <NavigationContainer>
      {auth ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
