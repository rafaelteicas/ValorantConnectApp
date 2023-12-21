import {Image} from 'react-native-image-crop-picker';

import {profileImageAPI} from './profileImageAPI';

async function uploadProfileImage(id: number, response: Image): Promise<void> {
  const formData = new FormData();
  formData.append(
    'image',
    JSON.parse(
      JSON.stringify({
        uri: response.path,
        type: response.mime,
        name: response.filename,
      }),
    ),
  );
  return await profileImageAPI.uploadImage({
    id,
    formData,
  });
}

async function getProfileImage(id: number): Promise<string> {
  const profileImage = await profileImageAPI.getProfileImage(id);
  return profileImage;
}

export const profileImageService = {
  uploadProfileImage,
  getProfileImage,
};
