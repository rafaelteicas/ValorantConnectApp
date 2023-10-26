import React from 'react';

import {TouchableOpacity} from 'react-native';

import {Box, Text} from '@components';

export function TopMenu() {
  return (
    <Box justifyContent="center" mt="s32" g="s20" flexDirection="row">
      <Box flexDirection="column">
        <TouchableOpacity>
          <Text preset="paragraphSmall" color="backgroundContrast">
            AGENTES
          </Text>
        </TouchableOpacity>
        <Box backgroundColor="primary" width={20} height={5} />
      </Box>
      <Text preset="paragraphSmall" color="backgroundContrast">
        MAPAS
      </Text>
      <Text preset="paragraphSmall" color="backgroundContrast">
        ARMAS
      </Text>
    </Box>
  );
}
