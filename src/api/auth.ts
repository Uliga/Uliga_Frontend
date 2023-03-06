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

export const checkEmail = async (email: string) => {
  const { data } = await unAuthorizationClient.get(
    `${API.CHECK_EMAIL}${email}`,
  );
  return data;
};
