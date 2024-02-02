import React from 'react';

import {authService} from '@domain';
import {mockUtils, server} from '@test';

import {fireEvent, renderScreen, screen, waitFor} from 'test-utils';

import {SignUpScreen} from '../../SignUpScreen';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.runAllTimers();
  jest.resetAllMocks();
});

const mockSuccessNavigator = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockSuccessNavigator,
  }),
}));

jest.mock('../../../../../components/Loading/Loading', () => ({
  Loading: jest.fn(),
}));

describe('integration: SignUpScreen', () => {
  it('SignUpScreen flow', async () => {
    jest
      .spyOn(authService, 'signUp')
      .mockResolvedValueOnce(mockUtils.userApiMock);
    // 1) render SignUpScreen, first screen should be EmailScreen
    renderScreen(<SignUpScreen />);
    const emailScreenInput = screen.getByPlaceholderText(/Digite seu e-mail/i);
    expect(emailScreenInput).toBeTruthy();

    // 2) type email and verify if it is valid, if email is valid the button should be enabled and go to PasswordScreen
    fireEvent.changeText(emailScreenInput, 'invalid_mail');

    fireEvent.changeText(emailScreenInput, mockUtils.userApiMock.user.email);

    const buttonEmail = await screen.findByTestId(/button-email/i);
    await waitFor(() => fireEvent.press(buttonEmail));

    // 4) type password and confirmPassword and if them are equal go to ValorantDataScreen
    const passwordScreenInput = await screen.findByPlaceholderText(
      /digite sua senha/i,
    );
    const confirmPasswordScreenInput = await screen.findByPlaceholderText(
      /Digite novamente a senha que você escolheu!/i,
    );
    const buttonPassword = await screen.findByTestId(/button-password/i);

    await waitFor(() => fireEvent.changeText(passwordScreenInput, '123456789'));

    await waitFor(() =>
      fireEvent.changeText(confirmPasswordScreenInput, '123456789'),
    );

    await waitFor(() => fireEvent.press(buttonPassword));

    // go to ValorantDataScreen and finish SignUpScreen flow
    const valorantIdInput = await screen.findByPlaceholderText(/nome no game/i);
    fireEvent.changeText(valorantIdInput, 'anyUser');

    const valorantTagInput = await screen.findByPlaceholderText(/#1234/i);

    fireEvent.changeText(valorantTagInput, '1234');

    const usernameInput = await screen.findByPlaceholderText(
      /Nome para o app/i,
    );

    fireEvent.changeText(usernameInput, mockUtils.userApiMock.user.username);

    const buttonValorantData = await screen.findByTestId(
      /valorant-data-button/i,
    );

    await waitFor(() => fireEvent.press(buttonValorantData));

    // should send to HomeScreen
    expect(mockSuccessNavigator).toHaveBeenCalled();
  }, 30000);
});
