import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  loadBudgetCompareAnalyze,
  loadMonthCompareAnalyze,
  loadWeeklyCompareAnalyze,
} from "../../api/book";
import QUERYKEYS from "../../constants/querykey";
import {
  IBudgetCompare,
  IMonthCompare,
  IWeeklyCompare,
} from "../../interfaces/book";
import getMoneyUnit from "../../utils/money";

export default function useChart() {
  const { bookId } = useParams();

  const queryFn = () =>
    loadMonthCompareAnalyze({
      id: bookId ? +bookId : 0,
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
    });

  const { data: monthData } = useQuery<IMonthCompare>(
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
      if (monthData?.compare[2]?.value) {
        setAverage(
          `일 평균 ${getMoneyUnit(
            Math.round(monthData.compare[2].value / new Date().getDate()),
          )}원`,
        );
      }
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
      month: new Date().getMonth() + 1,
    });

  const { data: budgetData } = useQuery<IBudgetCompare>(
    [QUERYKEYS.LOAD_BUDGET_COMPARE_ANALYZE],
    budgetQueryFn,
  );

  const weeklyQueryFn = () =>
    loadWeeklyCompareAnalyze({
      id: bookId ? +bookId : 0,
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      startDay: 1,
    });

  const { data: weeklyData } = useQuery<IWeeklyCompare>(
    [QUERYKEYS.LOAD_WEEKLY_COMPARE_ANALYZE],
    weeklyQueryFn,
  );

  return { budgetData, monthData, average, sum, diff, weeklyData };
}
