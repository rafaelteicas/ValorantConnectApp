import React from 'react';

import {render, fireEvent} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  it('should call onPress when button is pressed', () => {
    const mockedOnPress = jest.fn();
    const {getByText} = render(<Button title="TEST" onPress={mockedOnPress} />);
    const buttonElement = getByText('TEST');
    fireEvent.press(buttonElement);
    expect(mockedOnPress).toHaveBeenCalled();
  });
});
