import React from 'react';

import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '@service';

import {Box, Icon, Screen, Text} from '@components';

export function InfoScreen() {
  const {auth} = useAuthContext();
  const navigation = useNavigation();

  function navigateToEdit(field: string, placeholder: string) {
    navigation.navigate('EditScreen', {
      field,
      placeholder,
    });
  }

  if (auth) {
    const {email, riotId, username} = auth?.user;
    return (
      <Screen canGoBack>
        <Box flex={1}>
          <Box alignItems="center">
            <Text preset="title">Informações de usuário</Text>
          </Box>
          <FieldComponent
            field="E-mail"
            value={email}
            onPress={() => navigateToEdit('E-mail', 'Digite seu novo e-mail')}
          />
          <FieldComponent
            field="Riot Id"
            value={riotId}
            onPress={() => navigateToEdit('Riot Id', 'Digite seu novo riot id')}
          />
          <FieldComponent
            field="Username"
            value={username}
            onPress={() =>
              navigateToEdit('Username', 'Digite seu novo username')
            }
          />
          <TouchableOpacity>
            <Text preset="heading" color="primary" p="s12">
              Alterar senha
            </Text>
          </TouchableOpacity>
        </Box>
      </Screen>
    );
  }
}

function FieldComponent({
  field,
  value,
  onPress,
}: {
  field: string;
  value: string;
  onPress: () => void;
}) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      borderBottomColor="backgroundContrast"
      borderBottomWidth={1}
      justifyContent="space-between"
      p="s12">
      <Box>
        <Text preset="heading" mr="s12">
          {field}
        </Text>
        <Text>{value}</Text>
      </Box>
      <Icon
        mr="s12"
        name="editIcon"
        color="backgroundContrast"
        size={15}
        onPress={onPress}
      />
    </Box>
  );
}
