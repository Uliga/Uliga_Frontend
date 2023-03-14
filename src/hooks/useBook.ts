import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { answerInvitation, loadBookInfo, loadBookList } from "../api/book";
import { IBookInfo, IBookList } from "../interfaces/book";
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

  return {
    useSelectedBook,
    useReplaceBook,
    useBookList,
    mutateInvitation,
  };
}
