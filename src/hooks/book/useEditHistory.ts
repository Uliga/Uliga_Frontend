import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useBook from "./useBook";
import { IHistory } from "../../interfaces/book";
import { InputTypes } from "./useWrite";
import useValidate from "../useValidate";
import REGEX from "../../constants/regex";
import useInput from "../useInput";
import toastMsg from "../../components/Toast";
import { updateIncome, updateRecord } from "../../api/book";

export default function useEditHistory({
  history,
  refetch,
  setIsEditFormOpen,
}: {
  history: IHistory;
  refetch: () => void;
  setIsEditFormOpen: Dispatch<SetStateAction<{ id: number; open: boolean }>>;
}) {
  const { bookId } = useParams();
  const { useCategoryList } = useBook();
  const list = useCategoryList(bookId ? +bookId : 0);
  const [categoryOptions, setCategoryOptions] = useState<any>(undefined);
  const [isIncome, onChangeIncome, setIsIncome] = useInput(null);
  const [date, onChangeDate, setDate] = useInput("");
  const [category, onChangeCategory, setCategory] = useInput(null);
  const [payment, onChangePayment, setPayment] = useInput(null);
  const [account, onChangeAccount, setAccount] = useInput("");
  const [memo, onChangeMemo, setMemo] = useInput("");
  const [value, onChangeValue, setValue, isValidateValue] = useValidate({
    validator: (input: string) => REGEX.INTEGER.test(input),
  });
  const [disabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (list) {
      const newList = [{ id: 0, value: undefined, label: "선택" }, ...list];
      setCategoryOptions([...newList]);
    } else {
      setCategoryOptions([]);
    }
  }, [list]);

  useEffect(() => {
    setIsIncome(history.type === "INCOME" ? "수입" : "지출");
    setValue(+history.value);
    setDate(
      `${history.year}-${
        history.month < 10 ? `0${history.month}` : history.month
      }-${history.day < 10 ? `0${history.day}` : history.day}`,
    );
    setCategory(history.category);
    setPayment(history.payment);
    setAccount(history.account);
    setMemo(history.memo);
  }, [history]);

  useEffect(() => {
    setIsDisabled(
      isIncome === "선택" ||
        date === "" ||
        value === "" ||
        !isValidateValue ||
        category === "선택" ||
        payment === "선택" ||
        account === "",
    );
  }, [isIncome, value, date, category, payment, account, memo]);
  const inputList: InputTypes[] = [
    {
      label: "isIncome",
      size: 6,
      options: [
        { value: undefined, label: "선택" },
        { value: "지출", label: "지출" },
        { value: "수입", label: "수입" },
      ],
      value: isIncome,
      onChange: onChangeIncome,
    },
    {
      label: "date",
      size: 11,
      type: "date",
      value: date,
      onChange: onChangeDate,
    },
    {
      label: "category",
      size: 9,
      options: categoryOptions,
      value: category,
      onChange: onChangeCategory,
    },
    {
      label: "payment",
      size: 7,
      options: [
        { value: undefined, label: "선택" },
        { value: "현금", label: "현금" },
        { value: "카드", label: "카드" },
        { value: "이체", label: "이체" },
      ],
      value: payment,
      onChange: onChangePayment,
    },
    {
      label: "account",
      size: 9,
      type: "text",
      value: account,
      onChange: onChangeAccount,
    },
    {
      label: "value",
      size: 8,
      type: "number",
      value,
      onChange: onChangeValue,
    },
    {
      label: "memo",
      size: 14,
      type: "text",
      value: memo,
      onChange: onChangeMemo,
    },
  ];
  const mutateUpdateHistory = useMutation(
    ["updateHistory"],
    history.type === "INCOME" ? updateIncome : updateRecord,
    {
      onSuccess: () => {
        toastMsg("내역 수정 완료 👏");
        refetch();
        setIsEditFormOpen({ id: history.id, open: false });
      },
      onError: ({
        response: {
          data: { errorCode, message },
        },
      }) => {
        toastMsg(`${errorCode} / ${message}`);
      },
    },
  );
  const onSubmitEditForm = () => {
    const historyData = {
      id: history.id,
      value: +value,
      payment,
      account,
      memo,
      category,
      date,
    };
    mutateUpdateHistory.mutate(historyData);
  };
  return {
    inputList,
    onSubmitEditForm,
    disabled,
    mutateUpdateHistory,
  };
}
