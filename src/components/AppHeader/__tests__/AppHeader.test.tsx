import React from 'react';

import {useAuthContext} from '@service';
import {render, renderHook, screen} from 'test-utils';

import {mockedAuthData} from '../../../domain/Auth/useCases/__tests__/mock';

import {AppHeader} from '../AppHeader';

function renderAppHeader() {
  render(<AppHeader />);
  const appHeaderBox = screen.queryByTestId('app-header-box');
  const imageAvatarComponent = screen.queryByTestId('image-avatar');
  const defaultAvatarComponent = screen.queryByTestId('default-avatar');

  return {
    appHeaderBox,
    imageAvatarComponent,
    defaultAvatarComponent,
  };
}

let mockedDataValue: string | null;

jest.mock('@domain', () => {
  const originalModules = jest.requireActual('@domain');
  return {
    ...originalModules,
    useGetProfileImage: () => ({
      data: mockedDataValue,
    }),
  };
});

describe('<AppHeader />', () => {
  it('should be false if no auth data is provided', () => {
    const {appHeaderBox} = renderAppHeader();
    expect(appHeaderBox).toBeFalsy();
  });
  it('should render if auth data is provided', () => {
    mockedDataValue = null;
    const useAuthContextHook = renderHook(useAuthContext);
    useAuthContextHook.result.current.auth = mockedAuthData;
    const {appHeaderBox} = renderAppHeader();
    expect(appHeaderBox).toBeTruthy();
  });
  it('should render default avatar if user does not have', () => {
    const useAuthContextHook = renderHook(useAuthContext);
    useAuthContextHook.result.current.auth = mockedAuthData;
    const {defaultAvatarComponent} = renderAppHeader();
    jest.clearAllMocks();
    expect(defaultAvatarComponent).toBeTruthy();
  });
  it('should call Image component with correct uri', async () => {
    mockedDataValue = 'any';
    const useAuthContextHook = renderHook(useAuthContext);
    useAuthContextHook.result.current.auth = mockedAuthData;
    const {imageAvatarComponent} = renderAppHeader();
    expect(imageAvatarComponent?.props.source.uri).toBe('any');
  });
});
