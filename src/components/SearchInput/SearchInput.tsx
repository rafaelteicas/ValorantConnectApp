import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';

interface Props extends TextInputProps {}

export function SearchInput({...textInputProps}: Props) {
  return (
    <Box
      flex={1}
      p="s16"
      backgroundColor="lightBox"
      flexDirection="row"
      justifyContent="space-between"
      borderRadius="b12">
      <TextInput style={{marginLeft: 12}} {...textInputProps} />
      <Box justifyContent="center" mr="s12">
        <Icon name="searchIcon" color="darkBox" />
      </Box>
    </Box>
  );
}
