import React from 'react';

import {useUserEditProfile} from '@domain';

import {Box, Button, FormTextInput, Screen} from '@components';
import {useAppForm} from '@hooks';
import {AppStackTypes} from '@routes';

export function EditScreen({route}: AppStackTypes<'EditScreen'>) {
  const {field, placeholder} = route.params;
  const {control, handleSubmit, getValues} = useAppForm({field: ''});
  const {mutation} = useUserEditProfile();

  function handleOnPress() {
    const value = getValues('field');
    const fieldApi = fieldApiValue(field);
    mutation(fieldApi, value);
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
      />
      <Box flex={1} justifyContent="flex-end">
        <Button
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
  } else {
    return fieldName.toLowerCase();
  }
}
