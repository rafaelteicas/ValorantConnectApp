import React from 'react';

import {render, screen} from 'test-utils';

import {Input} from '../Input';

const mockedOnChange = jest.fn();

let mockedSecure = true;

function renderInput() {
  render(
    <Input
      title="any_title"
      placeholder="password"
      onChangeText={mockedOnChange}
      secureTextEntry={mockedSecure}
    />,
  );
  const inputTitleComponent = screen.queryByTestId('text');
  const inputComponent = screen.getByTestId('text-input');
  const eyeIcon = screen.queryByTestId('eyeIcon');
  const eyeOffIcon = screen.queryByTestId('eyeOffIcon');
  const inputPlaceholder = screen.queryByTestId('password');

  return {
    inputTitleComponent,
    eyeIcon,
    inputComponent,
    eyeOffIcon,
    inputPlaceholder,
  };
}

describe('<Input />', () => {
  it('should render Text component if Input title is enabled', () => {
    const {inputTitleComponent} = renderInput();
    expect(inputTitleComponent).toBeTruthy();
  });
});
