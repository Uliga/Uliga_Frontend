import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { loadHistory } from "../../api/book";
import QUERYKEYS from "../../constants/querykey";

export default function useHistory() {
  const menuList = [
    {
      title: "분류",
      size: 6,
    },
    {
      title: "날짜",
      size: 11,
    },
    {
      title: "카테고리",
      size: 9,
    },
    {
      title: "결제수단",
      size: 7,
    },
    {
      title: "거래처",
      size: 9,
    },
    {
      title: "금액",
      size: 8,
    },
    {
      title: "메모",
      size: 14,
    },
    {
      title: "작성자",
      size: 8,
    },
  ];

  const { bookId } = useParams();

  const useLoadHistory = (historyData: object) => {
    const queryFn = () => loadHistory(historyData);
    const { data, refetch } = useQuery([QUERYKEYS.LOAD_HISTORY], queryFn);

    return { data, refetch };
  };

  const [curPage, setCurPage] = useState(1);
  const ITEM_SIZE = 8;

  const { data, refetch } = useLoadHistory({
    id: bookId,
    page: curPage - 1,
    size: ITEM_SIZE,
  });
  const HISTORY_DATA_SIZE = data?.totalElements;
  const content = data?.content;
  const onChangePage = (page: number) => {
    setCurPage(page);
  };

  useEffect(() => {
    refetch();
  }, [curPage]);

  return {
    menuList,
    data,
    curPage,
    setCurPage,
    HISTORY_DATA_SIZE,
    ITEM_SIZE,
    onChangePage,
    content,
  };
}
