import React from 'react';

import {render, fireEvent, screen} from 'test-utils';

import {Button, ButtonProps} from '../Button';

function renderButton(props: Partial<ButtonProps>) {
  render(<Button title="TEST" {...props} />);
  const buttonElement = screen.getByText('TEST');
  return {
    buttonElement,
  };
}

describe('<Button />', () => {
  it('should call onPress when button is pressed', () => {
    const mockedOnPress = jest.fn();
    const {buttonElement} = renderButton({onPress: mockedOnPress});
    fireEvent.press(buttonElement);
    expect(mockedOnPress).toHaveBeenCalled();
  });
  it('should not call onPress if button is disabled', () => {
    const mockedOnPress = jest.fn();
    const {buttonElement} = renderButton({
      onPress: mockedOnPress,
      disabled: true,
    });
    fireEvent.press(buttonElement);
    expect(mockedOnPress).not.toHaveBeenCalled();
  });
});
