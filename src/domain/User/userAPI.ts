import {api} from '@api';

export async function getUser() {
  const response = await api.get('/user');
  return response.data;
}

export async function getUserById(id: string) {
  const response = await api.get(`/user/${id}`);
  return response.data;
}

async function editUserInfo(
  field: string,
  value: string,
  confirmPassword?: string,
): Promise<void> {
  await api.patch('/user', {field, value, confirmPassword});
}

export const userAPI = {
  getUser,
  getUserById,
  editUserInfo,
};
