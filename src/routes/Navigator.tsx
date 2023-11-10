import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAuth} from '@service';

import {AppStackNavigator, AuthStackNavigator} from '@routes';

export function Navigator() {
  const {auth} = useAuth();
  console.log(auth);

  return (
    <NavigationContainer>
      {auth ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
