import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERYKEYS from "../../constants/querykey";
import { createBudget, updateBudget } from "../../api/book";
import toastMsg from "../../components/Toast";
import useBudget from "./useBudget";
import useInput from "../useInput";

export default function useCreateBudget() {
  const queryClient = useQueryClient();
  const budget = useBudget();
  if (!budget) {
    return null;
  }
  const [budgets, setBudget] = useInput("");

  const mutateCreateBudget = useMutation(["createBudget"], createBudget, {
    onSuccess: () => {
      toastMsg("예산이 추가되었습니다 👏");
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
      toastMsg("예산이 수정되었습니다 👏");
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

  return { mutateUpdateBudget, mutateCreateBudget, budgets, setBudget };
}
