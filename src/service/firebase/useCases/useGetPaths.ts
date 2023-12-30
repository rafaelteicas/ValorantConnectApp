import {useEffect, useState} from 'react';

import database from '@react-native-firebase/database';

interface Props {
  userId: number;
}

export function useGetPaths({userId}: Props) {
  const [paths, setPaths] = useState<any[]>();
  useEffect(() => {
    const onValueChange = database()
      .ref(`conversations/${userId}`)
      .orderByChild('timestamp')
      .limitToLast(10)
      .on('value', snapshot => {
        const mensagens: any[] = [];
        // @ts-ignore
        snapshot.forEach(child => {
          if (child.exists()) {
            mensagens.push(child.val());
          }
        });
        setPaths(mensagens);
      });

    return () =>
      database().ref(`conversations/${userId}`).off('value', onValueChange);
  }, [userId]);

  return {
    paths,
  };
}
