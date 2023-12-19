import {api} from '@api';

export async function getUser() {
  const response = await api.get('/user');
  return response.data;
}

export async function getUserById(id: string) {
  const response = await api.get(`/user/${id}`);

  return response.data;
}

export const userAPI = {
  getUser,
  getUserById,
};
