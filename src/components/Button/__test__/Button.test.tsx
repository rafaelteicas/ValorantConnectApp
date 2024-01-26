import React from 'react';

import {render, fireEvent, screen} from 'test-utils';

import {Button, ButtonProps} from '../Button';

function renderButton(props: Partial<ButtonProps>) {
  render(<Button title="TEST" {...props} />);
  const buttonComponent = screen.queryByText('TEST');
  const touchableOpacityComponent = screen.getByTestId('touchable-opacity');
  const boxComponent = screen.getAllByTestId('box');
  const activityIndicatorComponent = screen.queryByTestId('activity-indicator');

  return {
    buttonComponent,
    touchableOpacityComponent,
    boxComponent,
    activityIndicatorComponent,
  };
}

describe('<Button />', () => {
  it('should call onPress when button is pressed', () => {
    const mockedOnPress = jest.fn();
    const {buttonComponent} = renderButton({onPress: mockedOnPress});
    fireEvent.press(buttonComponent!!);
    expect(mockedOnPress).toHaveBeenCalled();
  });
  it('should not call onPress if button is disabled', () => {
    const mockedOnPress = jest.fn();
    const {buttonComponent} = renderButton({
      onPress: mockedOnPress,
      disabled: true,
    });
    fireEvent.press(buttonComponent!!);
    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  test('should paddingHorizontal equal to 32 when paddingHorizontalOn is true', () => {
    const {touchableOpacityComponent} = renderButton({
      paddingHorizontalOn: true,
    });
    expect(touchableOpacityComponent.props.style.paddingHorizontal).toEqual(32);
  });
  test('should render a box to fix style and justifyContent equal to space-between when rightComponent', () => {
    const {boxComponent} = renderButton({
      rightComponent: true,
    });
    expect(boxComponent).toBeTruthy();
    expect(boxComponent[0].props.style[0].justifyContent).toEqual(
      'space-between',
    );
  });
  test('should render ActivityIndicator component when is loading', () => {
    const {activityIndicatorComponent} = renderButton({
      isLoading: true,
    });
    expect(activityIndicatorComponent).toBeTruthy();
  });
});
