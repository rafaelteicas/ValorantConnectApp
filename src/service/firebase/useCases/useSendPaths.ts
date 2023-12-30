import {firebase} from '@react-native-firebase/database';

interface Props {
  id: number;
  path: string;
  from: number;
}

export function useSendPaths({id, from, path}: Props) {
  const databaseRef = firebase.database().ref(`conversations/${id}`);
  const databaseRefFrom = firebase.database().ref(`conversations/${from}`);
  databaseRef.push({
    id: id,
    from: from,
    path: path,
  });
  databaseRefFrom.push({
    id: from,
    from: id,
    path: path,
  });
}
