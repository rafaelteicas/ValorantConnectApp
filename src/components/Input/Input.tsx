import React, {useState} from 'react';
import {TextInputProps, TextStyle} from 'react-native';

import {Pressable, TextInput} from 'react-native';

import {Box, BoxProps, Text} from '@components';

import {Icon} from '../Icon/Icon';

interface inputProps extends TextInputProps {
  title?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export function Input({
  title,
  placeholder,
  secureTextEntry,
  ...textInputProps
}: inputProps) {
  const [secure, setSecure] = useState<boolean>();

  return (
    <Box {...$inputContainer}>
      <Pressable>
        <Box padding="s16">
          <Text preset="paragraphMedium" bold color="primary">
            {title}
          </Text>
          <Box flexDirection="row">
            <TextInput
              {...textInputProps}
              secureTextEntry={secure}
              style={[$inputTextStyle]}
              placeholder={placeholder}
              placeholderTextColor={'white'}
            />
            {secureTextEntry && (
              <Icon
                name={secure ? 'eyeIcon' : 'eyeOffIcon'}
                onPress={() => setSecure(current => !current)}
              />
            )}
          </Box>
        </Box>
      </Pressable>
    </Box>
  );
}

const $inputTextStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  color: 'white',
  fontSize: 12,
};

const $inputContainer: BoxProps = {
  borderColor: 'primary',
  borderWidth: 1,
  marginBottom: 's32',
  borderRadius: 'b4',
};
