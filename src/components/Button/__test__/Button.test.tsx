import React from 'react';

import {render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  it('should render button', () => {
    render(<Button title="TEST" />);
  });
});
