import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import QUERYKEYS from "../constants/querykey";
import { loadMonthAsset } from "../api/book";

export default function useBudget() {
  const { bookId } = useParams();
  const date = new Date();
  const lastMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
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

  const queryFn = () =>
    loadMonthAsset(
      Number(bookId),
      `${date.getFullYear()}/${date.getMonth() + 1}`,
    );

  const { data: thisMonthData } = useQuery(
    [QUERYKEYS.LOAD_MONTH_ASSET, date.getMonth()],
    queryFn,
  );

  if (!thisMonthData) {
    return null;
  }
  if (!lastMonthData) {
    return null;
  }
  console.log("data1", thisMonthData);
  console.log("data2", lastMonthData);

  const thisData =
    thisMonthData.budget.value +
    thisMonthData.income.value -
    thisMonthData.record.value;
  const oneDayBudget = Math.trunc(thisData / lastDate);

  console.log("oneday", oneDayBudget);
  const thisDataGage = (thisData / thisMonthData.budget.value) * 100;
  const lastData =
    lastMonthData.budget.value +
    lastMonthData.income.value -
    lastMonthData.record.value;
  const lastDataGage = (lastData / lastMonthData.budget.value) * 100;

  return {
    thisData,
    thisDataGage,
    thisMonthData,
    oneDayBudget,
    lastData,
    lastDataGage,
    lastMonthData,
    lastMonthDate,
    date,
  };
}
