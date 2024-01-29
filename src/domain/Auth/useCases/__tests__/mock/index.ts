import {Auth} from 'src/domain/Auth/authTypes';

export const mockedAuthData: Auth = {
  token: {
    accessToken: 'any_token',
    refreshToken: 'any_token',
  },
  user: {
    id: 1,
    email: 'any_mail@mail.com',
    riotId: 'any_riotId',
    username: 'any_username',
    profileImage: 'any_profileImage',
  },
};
