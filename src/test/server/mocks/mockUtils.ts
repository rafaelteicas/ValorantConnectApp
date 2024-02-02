import {Auth} from '@domain';

const userApiMock: Auth = {
  user: {
    id: 1,
    email: 'anymail@mail.com',
    riotId: 'riotId#1234',
    username: 'username',
    profileImage: 'profileImage',
  },
  token: {
    accessToken: 'any_token',
    refreshToken: 'any_token',
  },
};

export const mockUtils = {
  userApiMock,
};
