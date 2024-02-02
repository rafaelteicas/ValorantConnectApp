import {setupServer} from 'msw/node';

import {findTeamHandlers} from './FindTeam/findTeamHandlers';
import {signUpHandlers} from './SignUp/signUpHandlers';

export const server = setupServer(...findTeamHandlers, ...signUpHandlers);
