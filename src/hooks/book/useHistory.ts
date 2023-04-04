/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  loadHistory,
  loadIncome,
  loadRecordCategory,
  loadRecord,
  loadHistoryCategory,
  loadIncomeCategory,
  deleteHistory,
} from "../../api/book";
import QUERYKEYS from "../../constants/querykey";
import {
  historyCategoryModalAtom,
  historyModalAtom,
} from "../../stores/atoms/context";
import allModalAtom from "../../stores/selectors/context";
import useBook from "./useBook";
import useDetectOutside from "./useDetectOutside";
import toastMsg from "../../components/Toast";

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

  const { useCategoryList } = useBook();
  const list = useCategoryList(bookId ? +bookId : 0);

  const categoryModalRef = useRef<HTMLDivElement>(null);
  const historyModalRef = useRef<HTMLDivElement>(null);
  const [historyTitle, setHistoryTitle] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");

  useDetectOutside({
    refs: [categoryModalRef],
    onOutsideClick: () => setHistoryCategoryOpen(false),
  });

  useDetectOutside({
    refs: [historyModalRef],
    onOutsideClick: () => setHistoryModalOpen(false),
  });

  useEffect(() => {
    if (currentPath === "history") {
      setHistoryTitle("내역 전체보기");
    }
    if (currentPath === "record") {
      setHistoryTitle("지출 전체보기");
    }
    if (currentPath === "income") {
      setHistoryTitle("수입 전체보기");
    }
  }, []);

  useEffect(() => {
    const curCategory = list?.find(
      (ele: { id: number; value: string; label: string }) =>
        ele.id === (categoryId ? +categoryId : 0),
    );
    setCategoryTitle(
      curCategory?.value ? curCategory?.value : "카테고리 전체보기",
    );
  }, [categoryId, list]);

  const [checkedList, setCheckedList] = useState<number[]>([]);
  const handleDeleteList = (historyId: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList(prev => [...prev, historyId]);
    } else {
      setCheckedList([...checkedList.filter(ele => ele !== historyId)]);
    }
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
    categoryModalRef,
    historyModalRef,
    historyTitle,
    categoryTitle,
    checkedList,
    setCheckedList,
    handleDeleteList,
  };
}
