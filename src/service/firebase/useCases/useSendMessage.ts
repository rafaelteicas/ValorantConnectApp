import {firebase} from '@react-native-firebase/database';

interface Props {
  path: string;
  data: {
    message: string;
    timestamp: number;
    userId: number;
  };
}

export function useSendMessage({data, path}: Props) {
  const databaseRef = firebase.database().ref(`message/${path}`);

  databaseRef.push({
    data,
  });
}
