export type Auth = {
  body: {
    token: string;
    refreshToken: string;
    expiresAt: string;
  };
  status: number;
};
