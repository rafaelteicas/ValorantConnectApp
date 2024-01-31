import {setupServer} from 'msw/node';

import {findTeamHandlers} from './FindTeam/findTeamHandlers';

export const server = setupServer(...findTeamHandlers);
