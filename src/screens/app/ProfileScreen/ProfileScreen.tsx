import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen} from '@components';

export function ProfileScreen() {
  const {signOut} = useAuthSignOut();
  function handleSignOut() {
    signOut;
  }
  return (
    <Screen>
      <Button onPress={handleSignOut} />
    </Screen>
  );
}
