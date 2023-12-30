import React, {useRef} from 'react';

import {ListRenderItemInfo} from 'react-native';

import {FlatList} from 'react-native';

import {useAuthContext, useGetMessages} from '@service';

import {MessageResponse} from 'src/domain/Message/messageTypes';

import {Box, Screen} from '@components';

import {AppStackTypes} from '@routes';

import ConversationComponent from './components/ConversationComponent';
import ConversationInput from './components/ConversationInput';

export function ConversationScreen({
  route,
}: AppStackTypes<'ConversationScreen'>) {
  const {auth} = useAuthContext();
  const flatListRef = useRef<FlatList>(null);
  if (!auth?.user.id) {
    return null;
  }
  const {postId, authorId} = route.params;
  const {data} = useGetMessages({
    path: `${postId}${authorId}${auth?.user.id}`,
  });

  if (!postId || !authorId) {
    return null;
  }
  const postPath = {
    path: {
      postId: postId.toString(),
      userId: auth.user.id.toString(),
      authorId: authorId.toString(),
    },
  };

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
      <ConversationInput path={postPath.path} data={data} />
    </Screen>
  );
}
