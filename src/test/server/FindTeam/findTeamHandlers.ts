import {Page} from '@api';
import {POST_PATH, PostAPI} from '@domain';
import {API_KEY} from '@env';
import {http, HttpResponse} from 'msw';

import {mockedData} from './mock';

const FULL_URL = `${API_KEY}${POST_PATH}`;

export const findTeamHandlers = [
  http.get(FULL_URL, async () => {
    const response: Page<PostAPI> = mockedData.mockedFindTeamPostResponseApi;
    return HttpResponse.json(response, {
      status: 200,
    });
  }),
];
