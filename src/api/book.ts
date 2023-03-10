import { authorizationClient } from ".";
import API from "./config";

export const createAccountBook = async (bookInfo: object) => {
  const { data } = await authorizationClient.post(API.ACCOUNT_BOOK, bookInfo);
  return data;
};

export const loadBookInfo = async (id: number) => {
  const { data } = await authorizationClient.get(`${API.ACCOUNT_BOOK}/${id}`);
  return data;
};

export const loadBookList = async () => {
  const { data } = await authorizationClient.get(API.ACCOUNT_BOOK);
  return data;
};
