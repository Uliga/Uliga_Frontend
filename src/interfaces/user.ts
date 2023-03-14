export interface IUser {
  memberInfo: {
    id: string;
    avatarUrl: string;
    username: string;
    nickName: string;
    applicationPassword: string;
    email: string;
  };
  tokenInfo: {
    accessToken: string;
    grantType: string;
    accessTokenExpiresIn: number;
  };
}

export interface InvitationProps {
  accountBookName: string;
  id: number;
  memberName: string;
}
export interface IUserInfo {
  invitations: InvitationProps[];
  memberInfo: {
    avatarUrl: string;
    email: string;
    id: string;
    nickName: string;
    privateAccountBookId: any;
    username: string;
  };
}
