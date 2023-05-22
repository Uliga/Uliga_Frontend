import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

export const authLogin = async (userLoginData: object) => {
  const { data } = await unAuthorizationClient.post(API.LOGIN, userLoginData);
  return data;
};
export const authSignup = async (userData: object) => {
  const { data } = await unAuthorizationClient.post(API.SIGNUP, userData);
  return data;
};

export const sendEmail = async (userData: object) => {
  const { data } = await unAuthorizationClient.post(API.EMAIL_SEND, userData);
  return data;
};
export const verifyCode = async (userData: object) => {
  const { data } = await unAuthorizationClient.post(API.CODE, userData);
  return data;
};
export const checkNicknameDuplicate = async (nickName: string) => {
  const { data } = await unAuthorizationClient.get(
    `${API.NICK_DUPLICATE}${nickName}`,
  );
  return data;
};
export const checkEmail = async (email: string) => {
  const { data } = await unAuthorizationClient.get(
    `${API.CHECK_EMAIL}${email}`,
  );
  return data;
};

export const authLogout = async () => {
  const { data } = await authorizationClient.get(API.LOGOUT);
  return data;
};

export const authSocialLogin = async (userData: object) => {
  const { data } = await unAuthorizationClient.post(API.SOCIAL_LOGIN, userData);
  return data;
};
