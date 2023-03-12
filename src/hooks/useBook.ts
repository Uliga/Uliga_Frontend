import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loadBookInfo, loadBookList } from "../api/book";
import { IBookInfo, IBookList } from "../interfaces/book";
import QUERYKEYS from "../constants/querykey";
import PATH from "../constants/path";

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

  return { useSelectedBook, useReplaceBook, useBookList };
}
