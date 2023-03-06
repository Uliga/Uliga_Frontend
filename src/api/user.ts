import { authorizationClient } from ".";
import API from "./config";

export const loadMe = async () => {
  const { data } = await authorizationClient.get(API.MEMBER);
  return data;
};

export default loadMe();
