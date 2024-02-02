import {SignUp} from '@domain';

import {mockUtils} from '../mocks/mockUtils';

const {email, username, riotId} = mockUtils.userApiMock.user;

export const userSignUpMock: SignUp = {
  username: username,
  email: email,
  confirmPassword: 'any_password',
  password: 'any_password',
  riotId: riotId,
};
