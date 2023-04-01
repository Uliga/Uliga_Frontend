import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import QUERYKEYS from "../constants/querykey";
import { createBudget, loadMonthAsset, updateBudget } from "../api/book";
import useInput from "./useInput";
import toastMsg from "../components/Toast";

export default function useBudget() {
  const { bookId } = useParams();
  const date = new Date();
  const lastMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  const [budgets, setBudget] = useInput("");
  const queryClient = useQueryClient();

  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    0,
  ).getDate();
  const lastMonthQueryFn = () =>
    loadMonthAsset(
      Number(bookId),
      `${lastMonthDate.getFullYear()}/${lastMonthDate.getMonth() + 1}`,
    );

  const { data: lastMonthData } = useQuery(
    [QUERYKEYS.LOAD_MONTH_ASSET, lastMonthDate.getMonth()],
    lastMonthQueryFn,
  );

  const thisMonthqueryFn = () =>
    loadMonthAsset(
      Number(bookId),
      `${date.getFullYear()}/${date.getMonth() + 1}`,
    );

  const { data: thisMonthData } = useQuery(
    [QUERYKEYS.LOAD_MONTH_ASSET, date.getMonth()],
    thisMonthqueryFn,
  );

  if (!thisMonthData) {
    return null;
  }
  if (!lastMonthData) {
    return null;
  }

  if (!thisMonthData.budget) {
    thisMonthData.budget = { value: 0 };
  }
  if (thisMonthData.record == null) {
    thisMonthData.record = { value: 0 };
  }
  if (lastMonthData.budget == null) {
    lastMonthData.budget = { value: 0 };
  }
  if (lastMonthData.record == null) {
    lastMonthData.record = { value: 0 };
  }
  const thisRemainData =
    thisMonthData.budget.value - thisMonthData.record.value;
  const thisDataGage = (thisRemainData / thisMonthData.budget.value) * 100;
  const lastRemainData =
    lastMonthData.budget.value - lastMonthData.record.value;
  const lastDataGage = (lastRemainData / lastMonthData.budget.value) * 100;
  const oneDayBudget = Math.trunc(thisRemainData / lastDate);
  const mutateCreateBudget = useMutation(["createBudget"], createBudget, {
    onSuccess: () => {
      toastMsg("예산이 추가되었습니다!");
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
  const mutateUpdateBudget = useMutation(["updateBudget"], updateBudget, {
    onSuccess: () => {
      toastMsg("예산이 수정되었습니다!");
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
  const selectUpdateCreate = () => {
    if (thisMonthData.budget.value) {
      mutateUpdateBudget.mutate({
        id: bookId,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        value: budgets,
      });
    } else {
      mutateCreateBudget.mutate({
        id: bookId,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        value: budgets,
      });
    }
  };

  return {
    thisRemainData,
    thisDataGage,
    thisMonthData,
    oneDayBudget,
    lastRemainData,
    lastDataGage,
    lastMonthData,
    lastMonthDate,
    date,
    budgets,
    setBudget,
    mutateCreateBudget,
    mutateUpdateBudget,
    selectUpdateCreate,
  };
}
