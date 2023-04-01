/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  loadHistory,
  loadIncome,
  loadRecordCategory,
  loadRecord,
  loadHistoryCategory,
  loadIncomeCategory,
} from "../../api/book";
import QUERYKEYS from "../../constants/querykey";
import {
  historyCategoryModalAtom,
  historyModalAtom,
} from "../../stores/atoms/context";
import allModalAtom from "../../stores/selectors/context";

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
  const { categoryId } = useParams();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  const [historyModalOpen, setHistoryModalOpen] =
    useRecoilState(historyModalAtom);
  const [historyCategoryOpen, setHistoryCategoryOpen] = useRecoilState(
    historyCategoryModalAtom,
  );
  const [, setAllModalAtom] = useRecoilState(allModalAtom);

  const [curPage, setCurPage] = useState(1);
  const ITEM_SIZE = 8;

  const useLoadHistory = (historyData: object) => {
    const queryFn = () => loadHistory(historyData);
    const { data, refetch } = useQuery([QUERYKEYS.LOAD_HISTORY], queryFn);

    return { data, refetch };
  };

  const useLoadHistoryCategory = (historyData: object) => {
    const queryFn = () => loadHistoryCategory(historyData);
    const { data, refetch } = useQuery(
      [QUERYKEYS.LOAD_HISTORY_CATEGORY],
      queryFn,
    );

    return { data, refetch };
  };

  const useLoadRecord = (historyData: object) => {
    const queryFn = () => loadRecord(historyData);
    const { data, refetch } = useQuery([QUERYKEYS.LOAD_RECORD], queryFn);

    return { data, refetch };
  };

  const useLoadRecordCategory = (historyData: object) => {
    const queryFn = () => loadRecordCategory(historyData);
    const { data, refetch } = useQuery(
      [QUERYKEYS.LOAD_RECORD_CATEGORY],
      queryFn,
    );

    return { data, refetch };
  };

  const useLoadIncome = (historyData: object) => {
    const queryFn = () => loadIncome(historyData);
    const { data, refetch } = useQuery([QUERYKEYS.LOAD_INCOME], queryFn);

    return { data, refetch };
  };

  const useLoadIncomeCategory = (historyData: object) => {
    const queryFn = () => loadIncomeCategory(historyData);
    const { data, refetch } = useQuery(
      [QUERYKEYS.LOAD_INCOME_CATEGORY],
      queryFn,
    );

    return { data, refetch };
  };

  const onChangePage = (page: number) => {
    setCurPage(page);
  };

  return {
    categoryId,
    bookId,
    menuList,
    useLoadHistory,
    useLoadRecord,
    useLoadRecordCategory,
    useLoadHistoryCategory,
    useLoadIncome,
    useLoadIncomeCategory,
    curPage,
    setCurPage,
    ITEM_SIZE,
    onChangePage,
    historyModalOpen,
    setHistoryModalOpen,
    historyCategoryOpen,
    setHistoryCategoryOpen,
    setAllModalAtom,
    currentPath,
  };
}
