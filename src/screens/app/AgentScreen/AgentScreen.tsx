import React from 'react';

import {Image} from 'react-native';

import {Box, Screen, Text} from '@components';
import {AppTopScreenProps} from '@routes';

export function AgentScreen({route}: AppTopScreenProps<'AgentScreen'>) {
  return (
    <Screen canGoBack>
      <Box>
        <Image source={{uri: route.params.image}} width={100} height={100} />
        <Text preset="paragraphMedium">{route.params.name}</Text>
      </Box>
    </Screen>
  );
}
