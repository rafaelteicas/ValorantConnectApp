import React from 'react';
import {TextInputProps, TextStyle} from 'react-native';

import {Pressable, TextInput} from 'react-native';

import {Box, BoxProps, Text} from '@components';

interface inputProps extends TextInputProps {
  title?: string;
  placeholder?: string;
}

export function Input({title, placeholder, ...textInputProps}: inputProps) {
  return (
    <Box {...$inputContainer}>
      <Pressable>
        <Text color="primary">{title}</Text>
        <Box>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="white"
            style={$inputTextStyle}
            {...textInputProps}
          />
        </Box>
      </Pressable>
    </Box>
  );
}

const $inputTextStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
};

const $inputContainer: BoxProps = {
  flexDirection: 'row',
  borderColor: 'primary',
  borderWidth: 1,
};
