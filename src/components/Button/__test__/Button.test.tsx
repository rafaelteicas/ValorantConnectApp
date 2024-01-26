import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {render} from '@testing-library/react-native';

import {theme} from '@theme';

import {Button} from '../Button';

describe('<Button />', () => {
  it('should render button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button title="TEST" />)
      </ThemeProvider>,
    );
  });
});
