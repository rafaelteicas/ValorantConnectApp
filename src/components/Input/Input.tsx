import React, {useState} from 'react';
import {TextInputProps, TextStyle} from 'react-native';

import {Pressable, TextInput} from 'react-native';

import {Box, BoxProps, Text} from '@components';

import {Icon} from '../Icon/Icon';

export interface InputProps extends TextInputProps {
  title?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export function Input({
  title,
  placeholder,
  secureTextEntry,
  ...textInputProps
}: InputProps) {
  const [secure, setSecure] = useState<boolean>(!!secureTextEntry);

  return (
    <Box
      style={{backgroundColor: 'rgba(255,255,255,0.1)'}}
      {...$inputContainer}>
      <Pressable>
        <Box padding="s12">
          <Text preset="paragraphMedium" bold color="primary">
            {title}
          </Text>
          <Box flexDirection="row">
            <TextInput
              style={[$inputTextStyle]}
              placeholder={placeholder}
              secureTextEntry={secure}
              placeholderTextColor={'white'}
              {...textInputProps}
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
