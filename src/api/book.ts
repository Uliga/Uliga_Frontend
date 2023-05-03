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

export const uploadRecord = async (bookData: object) => {
  const { data } = await authorizationClient.post(API.UPLOAD_RECORD, bookData);
  return data;
};

export const uploadIncome = async (bookData: object) => {
  const { data } = await authorizationClient.post(API.UPLOAD_INCOME, bookData);
  return data;
};

export const updateRecord = async (history: object) => {
  const { data } = await authorizationClient.patch(API.RECORD, history);
  return data;
};

export const updateIncome = async (history: object) => {
  const { data } = await authorizationClient.patch(API.INCOME, history);
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
  const { data } = await authorizationClient.get(API.SCHEDULE);
  return data;
};

export const loadScheduleDetail = async (id: number) => {
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.SCHEDULE}`,
  );
  return data;
};

export const loadCategory = async (id: number) => {
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}/category`,
  );
  return data;
};

export const updateSchedule = async (schedule: object) => {
  const { data } = await authorizationClient.patch(API.SCHEDULE, schedule);
  return data;
};

export const deleteSchedule = async (id: number) => {
  await authorizationClient.delete(`${API.SCHEDULE}/${id}`);
};
export const deleteSchedleAlarm = async () => {
  const { data } = await authorizationClient.delete(API.DELETE_ALARM);
  return data;
};

export const loadHistory = async (historyData: any) => {
  const { id, page, size } = historyData;
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.HISTORY}?page=${page}&size=${size}`,
  );
  return data;
};

export const loadHistoryCategory = async (historyData: any) => {
  const { id, categoryId, page, size } = historyData;
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.HISTORY}?page=${page}&size=${size}&categoryId=${categoryId}`,
  );
  return data;
};

export const loadIncome = async (historyData: any) => {
  const { id, page, size } = historyData;
  const { data } = await authorizationClient.get(
    `${API.INCOME}${API.ACCOUNT_BOOK}/${id}?page=${page}&size=${size}`,
  );
  return data;
};

export const loadIncomeCategory = async (historyData: any) => {
  const { id, categoryId, page, size } = historyData;
  const { data } = await authorizationClient.get(
    `${API.INCOME}${API.ACCOUNT_BOOK}/${id}?page=${page}&size=${size}&categoryId=${categoryId}`,
  );
  return data;
};

export const getSocialPrivateAccountBookId = async () => {
  const { data } = await authorizationClient.get(`${API.SOCIAL}`);
  return data;
};
export const loadRecord = async (historyData: any) => {
  const { id, page, size } = historyData;
  const { data } = await authorizationClient.get(
    `${API.RECORD}${API.ACCOUNT_BOOK}/${id}?page=${page}&size=${size}`,
  );
  return data;
};
export const loadMonthRecord = async (historyData: any) => {
  const { id, page, size, year, month, category } = historyData;
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.ANALYZE}/month/${year}/${month}?page=${page}&size=${size}&category=${category}`,
  );
  return data;
};

export const loadRecordCategory = async (historyData: any) => {
  const { id, categoryId, page, size } = historyData;
  const { data } = await authorizationClient.get(
    `${API.RECORD}${API.ACCOUNT_BOOK}/${id}?page=${page}&size=${size}&categoryId=${categoryId}`,
  );
  return data;
};
export const createBudget = async (budget: object) => {
  const { data } = await authorizationClient.post(API.CREATE_BUDGET, budget);
  return data;
};

export const updateBudget = async (budget: object) => {
  const { data } = await authorizationClient.patch(API.BUDGET, budget);
  return data;
};

export const deleteHistory = async (data: object) => {
  const { data: response } = await authorizationClient.delete(
    `${API.ACCOUNT_BOOK}/data`,
    {
      data,
    },
  );
  return response;
};

export const updateBook = async (newBook: {
  id: number;
  newBookData: object;
}) => {
  const { id, newBookData } = newBook;
  const { data } = await authorizationClient.patch(
    `${API.ACCOUNT_BOOK}/${id}`,
    newBookData,
  );
  return data;
};

export const deleteBook = async (id: number) => {
  const { data } = await authorizationClient.delete(
    `${API.ACCOUNT_BOOK}/${id}`,
  );

  return data;
};

export const loadDayHistory = async (dayHistory: {
  id: number;
  year: number;
  month: number;
  day: number;
}) => {
  const { id, year, month, day } = dayHistory;

  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}/item/${year}/${month}/${day}`,
  );

  return data;
};

export const loadMonthCompareAnalyze = async (monthData: {
  id: number;
  year: number;
  month: number;
}) => {
  const { id, year, month } = monthData;

  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.COMPARE_MONTH_ANALYZE}/${year}/${month}`,
  );

  return data;
};

export const loadBudgetCompareAnalyze = async (budgetData: {
  id: number;
  year: number;
  month: number;
}) => {
  const { id, year, month } = budgetData;

  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.COMPARE_BUDGET_ANALZE}/${year}/${month}`,
  );

  return data;
};

export const loadWeeklyCompareAnalyze = async (weeklyData: {
  id: number;
  year: number;
  month: number;
  startDay: number;
}) => {
  const { id, year, month, startDay } = weeklyData;
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.COMPARE_WEEKLY_ANALYZE}/${year}/${month}/${startDay}`,
  );
  return data;
};
export const loadFixedExpenses = async (id: number) => {
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.ANALYZE}${API.SCHEDULE}`,
  );
  return data;
};

export const loadCategoryChart = async (schedule: any) => {
  const { id, year, month } = schedule;
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.ANALYZE}/category/${year}/${month}`,
  );
  return data;
};

export const loadDailyChart = async (schedule: any) => {
  const { id, year, month } = schedule;
  const { data } = await authorizationClient.get(
    `${API.ACCOUNT_BOOK}/${id}${API.ANALYZE}/${year}/${month}`,
  );
  return data;
};
