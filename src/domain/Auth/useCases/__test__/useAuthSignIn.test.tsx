import {waitFor} from '@testing-library/react-native';

import {renderHook} from 'test-utils';

import {authService} from '../../authService';
import {useAuthSignIn} from '../useAuthSignIn';

import {mockedAuthData} from './mock';

const mockedSaveAuth = jest.fn();

jest.mock('@service', () => {
  const originalModules = jest.requireActual('@service');
  return {
    ...originalModules,
    useAuthContext: () => ({
      saveAuth: mockedSaveAuth,
    }),
  };
});

describe('useAuthSignIn', () => {
  it('should save credentials if signIn is success', async () => {
    jest.spyOn(authService, 'signIn').mockResolvedValueOnce(mockedAuthData);
    const {result} = renderHook(useAuthSignIn);
    result.current.signIn({email: 'rafael@mail.com', password: '123'});
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(mockedSaveAuth).toHaveBeenCalledWith(mockedAuthData);
  });
});
