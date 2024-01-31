import {Page} from '@api';
import {PostAPI} from '@domain';
import {User} from 'src/domain/User/userTypes';

const mockedUserApi: User = {
  username: 'rafael',
  profileImage: 'any_image',
  riotId: 'any_id',
};

const postMockApi: PostAPI = {
  id: 1,
  elo: 'Platina 1',
  main: 'Jett',
  message: '',
  other: ['Brimstone', 'Breach'],
  user: 1,
};

export const mockedFindTeamPostResponseApi: Page<PostAPI> = {
  meta: {
    totalPages: 1,
    perPage: '1',
    currentPage: '1',
    previousPage: null,
    nextPage: null,
    totalItems: 1,
  },
  post: [postMockApi],
};

export const mockedData = {
  mockedFindTeamPostResponseApi,
  mockedUserApi,
  postMockApi,
};
