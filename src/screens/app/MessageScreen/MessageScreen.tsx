import React, {useEffect} from 'react';

import {FlatList, ListRenderItemInfo} from 'react-native';

import {Conversation, useGetConversations} from '@domain';

import {useAuthContext} from '@service';

import {Screen} from '@components';

import {MessageScreenComponent} from './components/MessageScreenComponent';

export function MessageScreen() {
  const {auth} = useAuthContext();
  const id = auth?.user.id;
  if (!id) {
    return;
  }
  const {paths, refetch} = useGetConversations(id.toString());

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderItem({item}: ListRenderItemInfo<Conversation>) {
    return <MessageScreenComponent {...item} />;
  }

  return (
    <Screen>
      <FlatList
        data={paths}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Screen>
  );
}
