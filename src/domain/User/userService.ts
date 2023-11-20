import {userAPI} from './userAPI';

export async function getUserById(id: string) {
  const response = await userAPI.getUserById(id);
  return response.data;
}

export const userService = {
  getUserById,
};
