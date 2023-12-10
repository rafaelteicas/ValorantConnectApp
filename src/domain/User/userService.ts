import {userAPI} from './userAPI';
import {User} from './userTypes';

async function getUser(): Promise<User> {
  const response = await userAPI.getUser();
  return response;
}

async function getUserById(id: string): Promise<User> {
  const response = await userAPI.getUserById(id);

  return response;
}

export const userService = {
  getUser,
  getUserById,
};
