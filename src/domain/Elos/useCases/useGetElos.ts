import {useEffect, useState} from 'react';

import {elosService} from '../elosService';

export function useGetElos<T>(elo?: string) {
  const [elos, setElos] = useState<T>([] as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>(null);

  async function getEloData() {
    try {
      setLoading(true);
      setError(null);
      if (elo) {
        (await elosService.getElos()).map(item => {
          if (item.name.toLocaleLowerCase() === elo.toLocaleLowerCase()) {
            setElos(item as T);
            return item;
          }
        });
      } else {
        const data = await elosService.getElos();
        setElos(data as T);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getEloData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    elos,
    loading,
    error,
  };
}
