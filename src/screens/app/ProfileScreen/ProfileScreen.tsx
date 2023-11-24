import React from 'react';

import {useAuthSignOut} from '@domain';
import {Screen} from 'react-native-screens';

import {Box, Button, Text} from '@components';

export function ProfileScreen() {
  const {signOut} = useAuthSignOut();
  return (
    <Screen>
      <Box>
        <Button title="SIGNOUT" onPress={() => signOut} />
      </Box>
    </Screen>
  );
}
