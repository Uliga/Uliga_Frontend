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

export const loadMonthAsset = async (id: number, date: string) => {
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}/${API.ASSET}/${date}`,
  );
  return data;
};
export const uploadBook = async (bookData: object) => {
  const { data } = await authorizationClient.post(API.UPLOAD_BOOK, bookData);
  return data;
};

export const loadMonthItems = async (id: number, date: string) => {
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}/${API.ITEM}/${date}`,
  );
  return data;
};

export const answerInvitation = async (answer: object) => {
  const { data } = await authorizationClient.post(API.INVITATION_REPLY, answer);
  return data;
};

export const loadBookMember = async (id: number) => {
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.MEMBER}`,
  );
  return data;
};
export const addSchedule = async (scheduleData: object) => {
  const { data } = await authorizationClient.post(
    API.ADD_SCHEDULE,
    scheduleData,
  );
  return data;
};
export const loadSchedule = async () => {
  const { data } = await authorizationClient.get(`${API.SCHEDULE}`);
  return data;
};
