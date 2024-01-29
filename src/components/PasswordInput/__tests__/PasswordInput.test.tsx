import React from 'react';

import {IconProps} from 'src/components/Icon/Icon';
import {fireEvent, render, screen} from 'test-utils';

import PasswordInput from '../PasswordInput';

const mockedOnChange = jest.fn();

const eyeIcon: IconProps['name'] = 'eyeIcon';
const eyeOffIcon: IconProps['name'] = 'eyeOffIcon';
describe('<PasswordInput />', () => {
  it('should render with eyeOn icon and secureTextEntry enabled', () => {
    render(
      <PasswordInput
        value="password"
        placeholder="password"
        onChangeText={mockedOnChange}
      />,
    );
    const passwordPlaceholder = screen.getByPlaceholderText('password');
    expect(screen.getByTestId(eyeIcon)).toBeTruthy();
    expect(passwordPlaceholder.props.placeholder).toBeTruthy();
  });
  it('should toggle secureTextEntry and shows eyeOffIcon if press on eyeIcon', () => {
    render(
      <PasswordInput
        value="password"
        placeholder="password"
        onChangeText={mockedOnChange}
      />,
    );
    const passwordPlaceholder = screen.getByPlaceholderText('password');
    fireEvent.press(screen.getByTestId(eyeIcon));
    expect(screen.getByTestId(eyeOffIcon)).toBeTruthy();
    expect(passwordPlaceholder.props.secureTextEntry).toBeFalsy();
  });
});
