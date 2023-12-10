import React from 'react';

import {useModal} from '@service';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';

export function Modal() {
  const {modal, hideModal} = useModal();
  if (!modal) {
    return null;
  }
  return (
    <Box
      bottom="50%"
      p="s32"
      position="absolute"
      backgroundColor="backgroundContrast"
      borderRadius="b12"
      alignSelf="center">
      <Icon
        name="closeIcon"
        onPress={() => hideModal()}
        position="absolute"
        top={10}
        right={10}
        size={15}
      />
      {modal}
    </Box>
  );
}
