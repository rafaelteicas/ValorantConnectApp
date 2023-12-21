import {api} from '@api';

import {ProfileImageType} from './profileImageTypes';

async function uploadImage({id, formData}: ProfileImageType): Promise<void> {
  await api.post(`/profileImage/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

async function getProfileImage(id: number): Promise<string> {
  const response = await api.get(`/profileImage/${id}`);
  return response.data;
}

export const profileImageAPI = {
  uploadImage,
  getProfileImage,
};
