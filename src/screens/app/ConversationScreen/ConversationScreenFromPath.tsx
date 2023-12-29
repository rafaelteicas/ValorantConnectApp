import React, {useRef} from 'react';

import {ListRenderItemInfo} from 'react-native';

import {FlatList} from 'react-native';

import {useAuthContext, useGetMessages} from '@service';

import {MessageResponse} from 'src/domain/Message/messageTypes';

import {Box, Screen} from '@components';

import {AppStackTypes} from '@routes';

import ConversationComponent from './components/ConversationComponent';
import ConversationInput from './components/ConversationInput';

export function ConversationScreenFromPath({
  route,
}: AppStackTypes<'ConversationScreenFromPath'>) {
  const {auth} = useAuthContext();
  const flatListRef = useRef<FlatList>(null);
  if (!auth?.user.id) {
    return null;
  }
  const {path} = route.params;
  const {data} = useGetMessages({
    path: path,
  });

  function renderItem(item: ListRenderItemInfo<MessageResponse>) {
    return <ConversationComponent {...item.item} />;
  }
  return (
    <Screen canGoBack>
      <Box flex={1}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          initialNumToRender={3}
          showsVerticalScrollIndicator={false}
          inverted
        />
      </Box>
      <ConversationInput
        path={{userId: '', authorId: '', postId: ''}}
        fromPath={path}
      />
    </Screen>
  );
}
