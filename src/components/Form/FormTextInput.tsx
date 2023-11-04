import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {Input, InputProps} from '../Input/Input';

export function FormTextInput<T extends FieldValues>({
  control,
  name,
  rules,
  ...inputProps
}: InputProps & UseControllerProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field}) => (
        <Input
          onChangeText={field.onChange}
          value={field.value}
          {...inputProps}
        />
      )}
    />
  );
}
