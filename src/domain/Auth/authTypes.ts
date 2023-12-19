export type Auth = {
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
};

export type SignIn = {
  email: string;
  password: string;
};

export type SignUp = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  riotId: string;
};
