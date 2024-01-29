import React from 'react';

import {render, screen} from 'test-utils';

import {Input} from '../Input';

describe('<Input />', () => {
  it('should render text component if input is enabled', () => {
    render(<Input title="any_title" />);
    const inputTitleComponent = screen.queryByTestId('text');
    expect(inputTitleComponent).toBeTruthy();
  });
});
