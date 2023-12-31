import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {Input, InputProps} from '@components';

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
          value={field.value}
          onChangeText={field.onChange}
          {...inputProps}
        />
      )}
    />
  );
}
