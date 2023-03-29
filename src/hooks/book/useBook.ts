import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  loadBookInfo,
  loadBookList,
  loadCategory,
  loadMonthItems,
  loadSchedule,
  loadScheduleDetail,
} from "../../api/book";
import { IBookInfo, IBookList } from "../../interfaces/book";
import { IItem } from "../../interfaces/item";
import QUERYKEYS from "../../constants/querykey";

export const useSelectedBook = (bookid: any) => {
  const queryFn = () => loadBookInfo(+bookid);
  const { isLoading, error, data } = useQuery<IBookInfo>(
    [QUERYKEYS.LOAD_BOOK_INFO],
    queryFn,
  );
  return { isLoading, error, data };
};

export const useBookList = () => {
  const { data } = useQuery<IBookList>(
    [QUERYKEYS.LOAD_BOOK_LIST],
    loadBookList,
  );
  return { data };
};

export const useReplaceBook = (path: string, bookId: number) => {
  const navigate = useNavigate();
  navigate(`${path}/${bookId}`);
  window.location.reload();
};

export const useLoadMonthItems = (id: number, year: number, month: number) => {
  const date = `${year}/${month}`;
  const queryFn = () => loadMonthItems(id, date);
  const { data, refetch } = useQuery<IItem>(
    [QUERYKEYS.LOAD_MONTH_ITEM],
    queryFn,
  );
  return { data, refetch };
};

export const useCategoryList = (id: number) => {
  const queryFn = () => loadCategory(id);
  const { data } = useQuery([QUERYKEYS.LOAD_CATEGORY], queryFn);
  const list = data?.categories;
  return list;
};
export const useSchedule = () => {
  const { data } = useQuery([QUERYKEYS.LOAD_SCHEDULE], loadSchedule);
  return data;
};

export const useScheduleDetail = (id: number) => {
  const queryFn = () => loadScheduleDetail(id);
  const { data } = useQuery([QUERYKEYS.LOAD_SCHEDULE_DETAIL], queryFn);
  return data;
};
