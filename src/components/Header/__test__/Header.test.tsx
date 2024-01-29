import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {Header} from '../Header';

const mockedGoBackPress = jest.fn();

jest.mock('@react-navigation/native', () => {
  const otherModules = jest.requireActual('@react-navigation/native');
  return {
    ...otherModules,
    useNavigation: () => ({
      goBack: mockedGoBackPress,
    }),
  };
});

describe('<Header />', () => {
  it('should go back when goBack is pressed', () => {
    render(<Header />);
    const goBackButton = screen.getByTestId('go-back-header');
    fireEvent.press(goBackButton);
    expect(mockedGoBackPress).toBeTruthy();
  });
});
