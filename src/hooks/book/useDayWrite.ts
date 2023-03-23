import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import useInput from "../useInput";
import getMoneyUnit from "../../utils/money";
import { bottomSheetAtom } from "../../stores/atoms/context";
import getDateUnit from "../../utils/date";
import { uploadIncome, uploadRecord } from "../../api/book";
import toastMsg from "../../components/Toast";
import QUERYKEYS from "../../constants/querykey";
import useBook from "./useBook";

export default function useDayWrite() {
  const { bookId } = useParams();

  const [bottomSheetOpen, setBottomSheetOpen] = useRecoilState<{
    open: boolean;
    day: any;
  }>(bottomSheetAtom);
  const { day, open } = bottomSheetOpen;

  const closeBottomSheet = () => {
    setBottomSheetOpen({
      ...bottomSheetOpen,
      open: false,
      day: new Date(),
    });
  };

  type InputTypes = {
    title: string;
    label: string;
    options?: object[];
    value?: boolean | number | string;
    type?: string;
  };

  const [value, onChangeValue] = useInput(null);
  const [formattedValue, setFormattedValue] = useState("");
  const [isIncome, setIsIncome] = useState(false);

  useEffect(() => {
    setFormattedValue(getMoneyUnit(+value));
  }, [value]);

  const [radioList, setRadioList] = useState([
    {
      className: "form_radio_btn radio_male",
      id: "record",
      type: "radio",
      name: "isIncome",
      value: "record",
      checked: true,
      htmlFor: "record",
      label: "지출",
    },
    {
      className: "form_radio_btn",
      id: "income",
      type: "radio",
      name: "isIncome",
      value: "income",
      checked: false,
      htmlFor: "income",
      label: "수입",
    },
  ]);
  const { useCategoryList } = useBook();
  const list = useCategoryList(bookId ? +bookId : 0);

  const inputForm = [
    {
      title: "카테고리",
      label: "category",
      options: list,
      value: undefined,
    },
    {
      title: "결제 수단",
      label: "payment",
      options: [
        { value: undefined, label: "선택" },
        { value: "현금", label: "현금" },
        { value: "카드", label: "카드" },
        { value: "이체", label: "이체" },
      ],
      value: undefined,
    },
    {
      title: "거래처",
      label: "account",

      type: "text",
      value: "",
    },
    {
      title: "메모",
      label: "memo",

      type: "text",
      value: "",
    },
  ];
  const [inputList, setInputList] = useState<InputTypes[]>(inputForm);
  useEffect(() => {
    setInputList(inputForm);
  }, [list]);
  const handleChange = (
    idx: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const fullList = [...inputList];
    fullList[idx].value = e.target.value;
    setInputList(fullList);
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "income") {
      setIsIncome(true);
    }
    if (e.target.value === "record") {
      setIsIncome(false);
    }
  };

  const queryClient = useQueryClient();
  const dateUnit = `${day.getMonth() + 1}월 ${day.getDate()}일`;

  const mutateIncome = useMutation(["mutateIncome"], uploadIncome, {
    onSuccess: () => {
      toastMsg(`${dateUnit} 수입 등록 완료 👏`);
      queryClient.invalidateQueries([QUERYKEYS.LOAD_MONTH_ITEM]);
      queryClient.invalidateQueries([QUERYKEYS.LOAD_MONTH_ASSET]);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  const mutateRecord = useMutation(["mutateRecord"], uploadRecord, {
    onSuccess: () => {
      toastMsg(`${dateUnit} 지출 등록 완료 👏`);
      queryClient.invalidateQueries([QUERYKEYS.LOAD_MONTH_ITEM]);
      queryClient.invalidateQueries([QUERYKEYS.LOAD_MONTH_ASSET]);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  type BookProps = {
    [label: string]: any;
  };

  const onSubmit = () => {
    const date = getDateUnit(day);
    const bookData: BookProps = {};
    inputList.map(input => {
      const { label } = input;
      bookData[label] = input.value;
      return bookData[label];
    });
    bookData.value = +value;
    bookData.id = bookId ? +bookId : undefined;
    bookData.date = date;
    bookData.sharedAccountBook = [];
    if (isIncome) {
      mutateIncome.mutate(bookData);
    } else {
      mutateRecord.mutate(bookData);
    }
  };

  return {
    isIncome,
    day,
    open,
    bottomSheetOpen,
    closeBottomSheet,
    formattedValue,
    value,
    onChangeValue,
    inputList,
    setInputList,
    radioList,
    setRadioList,
    onSubmit,
    handleChange,
    handleRadio,
    bookId,
  };
}
