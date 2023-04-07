import { authorizationClient } from ".";
import API from "./config";

export const loadMe = async () => {
  const { data } = await authorizationClient.get(API.MEMBER);
  return data;
};

export const patchMe = async (info: object) => {
  const { data } = await authorizationClient.patch(API.MEMBER, info);
  return data;
};
