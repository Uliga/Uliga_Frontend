export type IUser = {
  id: string;
  avatarUrl: string;
  username: string;
  nickname: string;
  applicationPassword: string;
  email: string;
  tokenInfo?: {
    accessToken: string;
    grantType: string;
    accessTokenExpiresIn: number;
  };
};
