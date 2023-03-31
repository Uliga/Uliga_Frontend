import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERYKEYS from "../constants/querykey";
import { createBudget, updateBudget } from "../api/book";
import toastMsg from "../components/Toast";
import useBudget from "./useBudget";

export default function useCreateBudget() {
  const { bookId } = useParams();
  const queryClient = useQueryClient();
  const budget = useBudget();
  if (!budget) {
    return null;
  }
  const { budgets, thisMonthData, date } = budget;
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
  return { selectUpdateCreate };
}
