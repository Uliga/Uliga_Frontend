import { useQuery } from "@tanstack/react-query";
import { loadBookInfo } from "../api/book";
import { IBookInfo } from "../interfaces/book";
import QUERYKEYS from "../constants/querykey";

const useSelectedBook = (bookid: any) => {
  const queryFn = () => loadBookInfo(+bookid);

  const { isLoading, error, data } = useQuery<IBookInfo>(
    [QUERYKEYS.LOAD_BOOK_INFO],
    queryFn,
  );

  return { isLoading, error, data };
};

export default useSelectedBook;
