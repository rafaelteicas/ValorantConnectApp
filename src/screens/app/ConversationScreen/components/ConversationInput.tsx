import React from 'react';

import {TouchableOpacity} from 'react-native';

import {useAuthContext, useSendMessage, useSendPaths} from '@service';
import {useForm} from 'react-hook-form';

import {FormTextInput, Text} from '@components';

interface Props {
  path: {
    postId: string;
    userId: string;
    authorId: string;
  };
  fromPath?: string;
  data?: any[];
}

export default function ConversationInput({path, fromPath, data}: Props) {
  const {auth} = useAuthContext();
  const {control, getValues, handleSubmit, setValue} = useForm({
    defaultValues: {
      message: '',
    },
    mode: 'onChange',
  });
  function sendMessage() {
    if (!auth || !getValues('message')) {
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

    if (!fromPath && data?.length === 0) {
      useSendPaths({
        path: `${path.postId}${path.authorId}${path.userId}`,
        id: auth.user.id,
        from: parseInt(path.authorId),
      });
    }
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
