import React, {useRef} from 'react';
import {Pressable, TextInput, TextInputProps} from 'react-native';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';

interface Props extends TextInputProps {
  boxProps?: BoxProps;
}

export function SearchInput({boxProps, ...textInputProps}: Props) {
  const inputRef = useRef<TextInput>(null);
  function focusOnInput() {
    inputRef.current?.focus;
  }
  return (
    <Pressable onPress={focusOnInput}>
      <Box
        position="absolute"
        p="s12"
        backgroundColor="lightBox"
        flexDirection="row"
        justifyContent="space-between"
        borderRadius="b12"
        {...boxProps}>
        <TextInput
          ref={inputRef}
          style={{flexGrow: 1, flexShrink: 1, marginLeft: 12, padding: 0}}
          {...textInputProps}
        />
        <Box justifyContent="center" mr="s12">
          <Icon name="searchIcon" color="darkBox" />
        </Box>
      </Box>
    </Pressable>
  );
}
