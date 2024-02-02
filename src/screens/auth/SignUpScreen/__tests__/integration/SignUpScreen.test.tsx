import React from 'react';

import {renderScreen} from 'test-utils';

import {SignUpScreen} from '../../SignUpScreen';

jest.useFakeTimers();
jest.runAllTimers();

jest.mock('../../../../../components/Loading/Loading', () => ({
  Loading: jest.fn(),
}));

describe('integration: SignUpScreen', () => {
  it('shows email screen', () => {
    renderScreen(<SignUpScreen />);
  });
});
