import React from 'react';

import {useForm} from 'react-hook-form';
import {render, renderHook} from 'test-utils';

import {FormTextInput} from '../FormTextInput';

describe('<FormTextInput />', () => {
  it('should render FormTextInput with correct values', () => {
    const renderHookForm = renderHook(() => useForm());
    render(
      <FormTextInput
        name="any_name"
        control={renderHookForm.result.current.control}
      />,
    );
  });
});
