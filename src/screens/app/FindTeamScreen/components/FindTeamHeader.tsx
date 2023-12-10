import React from 'react';

import {Box, Text, Button} from '@components';

interface Props {
  onPress: () => void;
}

export function FindTeamHeader({onPress}: Props) {
  return (
    <Box
      backgroundColor="primary"
      p="s32"
      flexDirection="row"
      justifyContent="center"
      alignItems="center">
      <Text preset="heading" color="backgroundContrast">
        {'ENCONTRE AGORA\nPESSOAS PARA JOGAR!!!'}
      </Text>
      <Button ml="s16" preset="outlineWhite" title="BUSCAR" onPress={onPress} />
    </Box>
  );
}
