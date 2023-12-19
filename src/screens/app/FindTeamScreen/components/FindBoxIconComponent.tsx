import React from 'react';

import {useAuthContext} from '@service';

import {Box, Icon} from '@components';

export function FindBoxIconComponent({username}: {username: string}) {
  const {auth} = useAuthContext();
  return (
    <Box flexDirection="row" justifyContent="flex-end" flex={1}>
      {/* {username !== auth?.user.username ? (
        <Icon name="deleteIcon" style={{padding: 12}} />
      ) : null}
      {username === auth?.user.username ? (
        <Icon
          name="editIcon"
          color="backgroundContrast"
          style={{padding: 12}}
          onPress={() => {}}
        />
      ) : null} */}
      {username === auth?.user.username ? (
        <Icon name="deleteIcon" style={{padding: 12}} onPress={() => {}} />
      ) : null}
    </Box>
  );
}
