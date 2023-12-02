export type Auth = {
  token: string;
  refreshToken: string;
  expiresAt: string;
  status: number;
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
