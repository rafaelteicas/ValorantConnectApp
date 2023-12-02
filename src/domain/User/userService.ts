import {userAPI} from './userAPI';

export async function getUser() {
  const response = await userAPI.getUser();

  return response;
}

export const userService = {
  getUser,
};
