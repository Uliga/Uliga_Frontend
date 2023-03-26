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

  const thisMonthqueryFn = () =>
    loadMonthAsset(
      Number(bookId),
      `${date.getFullYear()}/${date.getMonth() + 1}`,
    );

  const { data: thisMonthData } = useQuery(
    [QUERYKEYS.LOAD_MONTH_ASSET, date.getMonth()],
    thisMonthqueryFn,
  );
  const setDefaultValue = (
    obj: { [x: string]: { value: any } },
    prop: string,
    value: number,
  ) => {
    const newObj = { ...obj }; // 전개 연산자를 사용하여 객체를 복제, eslint 오류
    if (newObj[prop] == null) {
      newObj[prop] = { value };
    }
    return newObj;
  };
  const DEFAULT_VALUE = 0;

  if (!thisMonthData) {
    return null;
  }
  if (!lastMonthData) {
    return null;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const data of [thisMonthData, lastMonthData]) {
    setDefaultValue(data, "budget", DEFAULT_VALUE);
    setDefaultValue(data, "record", DEFAULT_VALUE);
    setDefaultValue(data, "income", DEFAULT_VALUE);
  }

  console.log("dddd", thisMonthData.budget);

  const thisRemainData =
    thisMonthData.budget.value - thisMonthData.record.value;
  const oneDayBudget = Math.trunc(thisRemainData / lastDate);
  const thisDataGage = (thisRemainData / thisMonthData.budget.value) * 100;
  const lastRemainData =
    lastMonthData.budget.value - lastMonthData.record.value;
  const lastDataGage = (lastRemainData / lastMonthData.budget.value) * 100;
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
  };
}
