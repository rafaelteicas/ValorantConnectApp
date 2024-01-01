import {useEffect, useState} from 'react';

import {userService} from '../userService';
import {User} from '../userTypes';

export function useGetUserById(id: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean | null>(null);

  async function getUserData() {
    try {
      setLoading(true);
      setError(null);
      const userData = await userService.getUserById(id);
      setUser(userData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    loading,
    error,
  };
}
