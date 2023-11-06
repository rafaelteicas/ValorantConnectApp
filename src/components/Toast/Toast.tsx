import React, {useEffect} from 'react';

import {useToast, useToastService} from '@service';

import {Box, BoxProps, Text} from '@components';

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || 2000);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Box {...$boxStyles}>
      <Text preset="paragraphSmall" color="primary">
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyles: BoxProps = {
  position: 'absolute',
  backgroundColor: 'lightBox',
  width: '90%',
  height: 40,
  bottom: 80,
  borderRadius: 'b12',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
};
