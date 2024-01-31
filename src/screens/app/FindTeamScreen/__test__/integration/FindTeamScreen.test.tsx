import React from 'react';

import {useGetCharacters} from '@domain';

import {server} from '@test';
import {fireEvent, renderHook, renderScreen, screen, waitFor} from 'test-utils';

import {mockedData} from '../../../../../test/server/FindTeam/mock';
import {FindTeamScreen} from '../../FindTeamScreen';

jest.useRealTimers();

beforeAll(() => server.listen({onUnhandledRequest: 'bypass'}));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockedFn = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedFn,
    }),
  };
});

describe('integration: FindTeamScreen', () => {
  it('should get posts and request image from agents name', async () => {
    renderScreen(<FindTeamScreen />);
    const useGetCharactersHook = renderHook(() =>
      useGetCharacters(mockedData.postMockApi.main),
    );
    await waitFor(() =>
      expect(useGetCharactersHook.result.current.agents!![0].name).toBe(
        mockedData.postMockApi.main,
      ),
    );
  });
  it('should navigate to PostScreen when press on button', async () => {
    renderScreen(<FindTeamScreen />);
    const button = await screen.findByText(/buscar/i);
    fireEvent.press(button);
    expect(mockedFn).toHaveBeenCalled();
  });
});
