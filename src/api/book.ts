import { authorizationClient } from ".";
import API from "./config";

const createAccountBook = async (bookInfo: object) => {
  const { data } = await authorizationClient.post(API.ACCOUNT_BOOK, bookInfo);
  return data;
};

export default createAccountBook;
