import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {InputProps} from '@components';

import PasswordInput from '../PasswordInput/PasswordInput';

export function FormPasswordInput<T extends FieldValues>({
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
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          {...inputProps}
        />
      )}
    />
  );
}
