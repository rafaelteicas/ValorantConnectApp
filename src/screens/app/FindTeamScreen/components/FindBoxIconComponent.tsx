import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useAuthContext} from '@service';

import {Box, Icon} from '@components';

interface Props {
  id: number;
  postId: number;
}

export function FindBoxIconComponent({id, postId}: Props) {
  const {auth} = useAuthContext();
  const {navigate} = useNavigation();
  return (
    <Box flexDirection="row" justifyContent="flex-end" flex={1}>
      {id !== auth?.user.id && (
        <Icon
          name="messageIcon"
          style={{padding: 12}}
          onPress={() =>
            navigate('ConversationScreen', {
              postId,
              authorId: id,
            })
          }
        />
      )}
      {id === auth?.user.id && (
        <Icon name="deleteIcon" style={{padding: 12}} onPress={() => {}} />
      )}
    </Box>
  );
}
