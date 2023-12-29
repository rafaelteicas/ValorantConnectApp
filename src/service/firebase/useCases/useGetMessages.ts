import {useEffect, useState} from 'react';

import database from '@react-native-firebase/database';

interface Props {
  path: string;
}

export function useGetMessages({path}: Props) {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const onValueChange = database()
      .ref(`message/${path}`)
      .orderByChild('timestamp')
      .limitToLast(10)
      .on('value', snapshot => {
        const mensagens: any[] = [];
        // @ts-ignore
        snapshot.forEach(child => {
          mensagens.push(child.val());
        });
        setData(mensagens.reverse());
      });

    return () => database().ref(`message/${path}`).off('value', onValueChange);
  }, [path]);

  return {
    data,
  };
}
