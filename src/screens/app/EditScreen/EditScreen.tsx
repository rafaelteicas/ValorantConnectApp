import React from 'react';

import {useUserEditProfile} from '@domain';

import {Box, Button, FormTextInput, Screen} from '@components';
import {useAppForm} from '@hooks';
import {AppStackTypes} from '@routes';

import {editSchema} from './editSchema';

export function EditScreen({route, navigation}: AppStackTypes<'EditScreen'>) {
  const {field, placeholder, confirmPassword} = route.params;
  const {control, formState, handleSubmit, getValues} = useAppForm(
    {
      field: '',
      confirmPassword: '',
    },
    editSchema(field),
  );
  const {mutation, isLoading} = useUserEditProfile({
    onSuccess: () => navigation.goBack(),
  });

  function handleOnPress() {
    const confirmPasswordValue = getValues('confirmPassword');
    const value = getValues('field');
    const fieldApi = fieldApiValue(field);
    mutation(fieldApi, value, confirmPasswordValue);
  }

  return (
    <Screen canGoBack>
      <FormTextInput
        control={control}
        autoCapitalize="none"
        autoFocus
        name="field"
        title={field}
        placeholder={placeholder}
        secureTextEntry={!!confirmPassword}
      />
      {confirmPassword && (
        <FormTextInput
          control={control}
          autoCapitalize="none"
          autoFocus
          name="confirmPassword"
          title={confirmPassword}
          placeholder="Digite novamente a senha"
          secureTextEntry
        />
      )}
      <Box flex={1} justifyContent="flex-end">
        <Button
          disabled={isLoading || !formState.isValid}
          isLoading={isLoading}
          title="Editar"
          rightComponent
          onPress={handleSubmit(handleOnPress)}
        />
      </Box>
    </Screen>
  );
}

function fieldApiValue(fieldName: string): string {
  if (fieldName.includes('E-mail')) {
    return 'email';
  }
  if (fieldName.includes('Riot Id')) {
    return 'riotId';
  }
  if (fieldName.includes('Senha')) {
    return 'password';
  } else {
    return fieldName.toLowerCase();
  }
}
