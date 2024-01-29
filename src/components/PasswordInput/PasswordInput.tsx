import React, {useState} from 'react';

import {Icon} from '../Icon/Icon';
import {Input, InputProps} from '../Input/Input';

interface Props extends InputProps {}

export default function PasswordInput({...inputProps}: Props) {
  const [secure, setSecure] = useState<boolean>(true);

  function toggleSecureTextEntry() {
    setSecure(current => !current);
  }

  function renderRightComponent() {
    return (
      <Icon
        name={secure ? 'eyeIcon' : 'eyeOffIcon'}
        onPress={toggleSecureTextEntry}
      />
    );
  }

  return (
    <Input
      RightComponent={renderRightComponent}
      secureTextEntry={secure}
      {...inputProps}
    />
  );
}
