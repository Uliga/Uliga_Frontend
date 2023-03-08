import { atom } from "recoil";
import { IUser } from "../../interfaces/user";

const me = atom<IUser>({
  key: "me",
  default: {
    memberInfo: {
      id: "",
      avatarUrl: "",
      username: "",
      nickname: "",
      applicationPassword: "",
      email: "",
    },
    tokenInfo: {
      accessToken: "",
      grantType: "",
      accessTokenExpiresIn: 0,
    },
  },
});

export default me;
