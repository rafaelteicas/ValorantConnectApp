import React from 'react';

import {useForm} from 'react-hook-form';
import {render, renderHook} from 'test-utils';

import {FormPasswordInput} from '../FormPasswordInput';

describe('<FormPasswordInput />', () => {
  it('should render FormPasswordInput with correct values', () => {
    const renderHookForm = renderHook(() => useForm());
    render(
      <FormPasswordInput
        name="any_name"
        control={renderHookForm.result.current.control}
      />,
    );
  });
});
