import React from 'react';

import {TouchableOpacity} from 'react-native';

import {useGetConversations, useSetConversation} from '@domain';
import {useAuthContext, useSendMessage} from '@service';
import {useForm} from 'react-hook-form';

import {FormTextInput, Text} from '@components';

interface Props {
  path: {
    postId: string;
    userId: string;
    authorId: string;
  };
  fromPath?: string;
}

export default function ConversationInput({path, fromPath}: Props) {
  const {auth} = useAuthContext();
  const {send} = useSetConversation();
  const {control, getValues, handleSubmit, setValue} = useForm({
    defaultValues: {
      message: '',
    },
    mode: 'onChange',
  });
  const {refetch} = useGetConversations(path.userId);
  function sendMessage() {
    if (!auth) {
      return null;
    }
    useSendMessage({
      data: {
        message: getValues('message'),
        timestamp: Date.now(),
        userId: auth.user.id,
      },
      path: fromPath
        ? fromPath
        : `${path.postId}${path.authorId}${path.userId}`,
    });
    fromPath ? null : send({path});
    refetch();
    setValue('message', '');
  }
  function rightComponent() {
    return (
      <TouchableOpacity onPress={handleSubmit(sendMessage)}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    );
  }
  return (
    <FormTextInput
      control={control}
      name="message"
      RightComponent={rightComponent}
    />
  );
}
