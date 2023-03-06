import { unAuthorizationClient } from ".";
import API from "./config";

export const authLogin = async (userLoginData: object) => {
  const { data } = await unAuthorizationClient.post(API.LOGIN, userLoginData);
  return data;
};

export const authSignup = async (userData: object) => {
  const { data } = await unAuthorizationClient.post(API.SIGNUP, userData);
  return data;
};

export const emailSend = async (userData: object) => {
  const { data } = await unAuthorizationClient.post(API.EMAILSEND, userData);
  return data;
};
export const codeVerify = async (userData: object) => {
  const { data } = await unAuthorizationClient.post(API.CODE, userData);
  console.log("인증완료?", data);
  return data;
};
export const nickDuplicate = async (nickName: string) => {
  const { data } = await unAuthorizationClient.get(
    `${API.NICK_DUPLICATE}${nickName}`,
  );
  return data;
};
