import React from 'react';

import {Box, Text} from '@components';

interface Props {
  children: React.ReactNode;
  title: string;
}

export function FindBoxComponent({children, title}: Props) {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      p="s12"
      alignItems="center">
      <Text color="backgroundContrast">{title}</Text>
      {children}
    </Box>
  );
}
