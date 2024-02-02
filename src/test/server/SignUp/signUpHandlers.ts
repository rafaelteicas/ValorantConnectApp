import {Auth, SIGN_UP_PATH} from '@domain';
import {API_KEY} from '@env';
import {HttpResponse, http} from 'msw';

import {mockUtils} from '../mocks/mockUtils';

const FULL_PATH = `${API_KEY}${SIGN_UP_PATH}`;

export const signUpHandlers = [
  http.post(FULL_PATH, async () => {
    const response: Auth = {...mockUtils.userApiMock};
    return HttpResponse.json(response, {status: 200});
  }),
];
