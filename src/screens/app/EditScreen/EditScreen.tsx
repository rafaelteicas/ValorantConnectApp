import React from 'react';

import {Box, Button, FormTextInput, Screen} from '@components';
import {useAppForm} from '@hooks';
import {AppStackTypes} from '@routes';

export function EditScreen({route}: AppStackTypes<'EditScreen'>) {
  const {field, placeholder} = route.params;
  const {control} = useAppForm({field: ''});
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
        <Button title="Editar" rightComponent />
      </Box>
    </Screen>
  );
}
