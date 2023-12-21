import {ImagePickerResponse} from 'react-native-image-picker';

export interface Auth {
  token: {
    accessToken: string;
    refreshToken: string;
  };
  user: {
    id: number;
    email: string;
    profileImage?: string;
    riotId: string;
    username: string;
  };
}

export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  riotId: string;
}

export interface UploadAvatarProps {
  id: number;
  imagePickerResponse: ImagePickerResponse;
}
