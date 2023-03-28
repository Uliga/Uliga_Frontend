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

export interface NotificationProps {
  creatorName: string;
  day: number;
  scheduleName: string;
  value: number;
}

export interface IUserInfo {
  invitations: InvitationProps[];
  notifications: NotificationProps[];
  memberInfo: {
    avatarUrl: string;
    email: string;
    id: string;
    nickName: string;
    privateAccountBookId: any;
    username: string;
  };
}
