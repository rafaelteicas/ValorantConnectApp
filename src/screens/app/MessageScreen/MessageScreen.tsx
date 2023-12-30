import React from 'react';

import {ListRenderItemInfo, FlatList} from 'react-native';

import {useAuthContext, useGetPaths} from '@service';

import {Box, Screen, Text} from '@components';

import {MessageScreenComponent} from './components/MessageScreenComponent';

export function MessageScreen() {
  const {auth} = useAuthContext();
  const {paths} = useGetPaths({userId: auth?.user.id!!});
  console.log(paths);

  if (!paths || paths.length === 0) {
    return (
      <Screen>
        <Box justifyContent="center" alignItems="center" flex={1}>
          <Text>Sem mensagens</Text>
        </Box>
      </Screen>
    );
  }

  function renderItem({item}: ListRenderItemInfo<any>) {
    return <MessageScreenComponent {...item} />;
  }

  return (
    <Screen>
      <FlatList
        data={paths}
        renderItem={renderItem}
        keyExtractor={item => item.path}
      />
    </Screen>
  );
}
