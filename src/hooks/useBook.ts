import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { loadBookInfo } from "../api/book";
import selectedBook from "../stores/atoms/book";
import { IBookInfo } from "../interfaces/book";
import QUERYKEYS from "../constants/querykey";

const useSelectedBook = () => {
  const bookid = useRecoilValue(selectedBook);
  const queryFn = () => loadBookInfo(bookid);

  const { isLoading, error, data } = useQuery<IBookInfo>(
    [QUERYKEYS.LOAD_BOOK_INFO],
    queryFn,
  );

  return { isLoading, error, data };
};

export default useSelectedBook;
