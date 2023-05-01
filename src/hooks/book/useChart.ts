import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  loadBudgetCompareAnalyze,
  loadMonthCompareAnalyze,
} from "../../api/book";
import QUERYKEYS from "../../constants/querykey";
import { IBudgetCompare, ICompare } from "../../interfaces/book";
import { getLastDate } from "../../utils/date";
import getMoneyUnit from "../../utils/money";

export default function useChart() {
  const { bookId } = useParams();

  const queryFn = () =>
    loadMonthCompareAnalyze({
      id: bookId ? +bookId : 0,
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
    });

  const { data: monthData } = useQuery<ICompare>(
    [QUERYKEYS.LOAD_MONTH_COMPARE_ANALYZE],
    queryFn,
  );

  const [average, setAverage] = useState("");
  const [diff, setDiff] = useState<number | null>(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (monthData) {
      setSum(
        monthData?.compare?.reduce((acc, cur) => {
          return acc + Number(cur.value ? cur.value : 0);
        }, 0),
      );
      setAverage(
        `일 평균 ${getMoneyUnit(
          Math.round(monthData.compare[0].value / getLastDate()),
        )}원`,
      );
      setDiff(
        monthData.compare[1]
          ? monthData.compare[1].value - monthData.compare[0].value
          : null,
      );
    }
  }, [monthData]);

  const budgetQueryFn = () =>
    loadBudgetCompareAnalyze({
      id: bookId ? +bookId : 0,
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    });

  const { data: budgetData } = useQuery<IBudgetCompare>(
    [QUERYKEYS.LOAD_BUDGET_COMPARE_ANALYZE],
    budgetQueryFn,
  );

  return { budgetData, monthData, average, sum, diff };
}
