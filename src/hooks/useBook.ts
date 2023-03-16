import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  answerInvitation,
  loadBookInfo,
  loadBookList,
  loadMonthItems,
} from "../api/book";
import { IBookInfo, IBookList } from "../interfaces/book";
import { IItem } from "../interfaces/item";
import QUERYKEYS from "../constants/querykey";
import PATH from "../constants/path";
import toastMsg from "../components/Toast";

export default function useBook() {
  const navigate = useNavigate();

  const useSelectedBook = (bookid: any) => {
    const queryFn = () => loadBookInfo(+bookid);
    const { isLoading, error, data } = useQuery<IBookInfo>(
      [QUERYKEYS.LOAD_BOOK_INFO],
      queryFn,
    );
    return { isLoading, error, data };
  };

  const useBookList = () => {
    const { data } = useQuery<IBookList>(
      [QUERYKEYS.LOAD_BOOK_LIST],
      loadBookList,
    );
    return { data };
  };

  const useReplaceBook = (bookId: number) => {
    navigate(`${PATH.MAIN}/${bookId}`);
    window.location.reload();
  };

  const queryClient = useQueryClient();

  const mutateInvitation = useMutation(["answerInvitation"], answerInvitation, {
    onSuccess: data => {
      toastMsg(data.join ? "초대 수락 성공" : "초대 거절 성공");
      queryClient.invalidateQueries([QUERYKEYS.LOAD_ME]);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  const useLoadMonthItems = (id: number, year: number, month: number) => {
    const date = `${year}/${month}`;
    const queryFn = () => loadMonthItems(id, date);
    const { data, refetch } = useQuery<IItem>(
      [QUERYKEYS.LOAD_MONTH_ITEM],
      queryFn,
    );
    return { data, refetch };
  };

  return {
    useSelectedBook,
    useReplaceBook,
    useBookList,
    mutateInvitation,
    useLoadMonthItems,
  };
}
