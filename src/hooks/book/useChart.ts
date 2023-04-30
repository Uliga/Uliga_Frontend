import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import COLORS from "../../constants/color";
import { loadMonthCompareAnalyze } from "../../api/book";
import QUERYKEYS from "../../constants/querykey";
import { ICompare } from "../../interfaces/book";
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

  const { data } = useQuery<ICompare>(
    [QUERYKEYS.LOAD_MONTH_COMPARE_ANALYZE],
    queryFn,
  );

  const budgetData = [
    {
      value: 10000,
      duration: 400,
      color: COLORS.GREY[300],
      labels: ["700,000원", "4월 예산"],
    },
    {
      value: 15000,
      duration: 500,
      color: COLORS.GREEN.DARK,
      labels: ["446,756원", "4월 지출", "-253,244원"],
    },
  ];

  const [average, setAverage] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (data) {
      setSum(
        data?.compare?.reduce((acc, cur) => {
          return acc + Number(cur.value ? cur.value : 0);
        }, 0),
      );
      setAverage(
        `일 평균 ${getMoneyUnit(
          Math.round(data.compare[0].value / getLastDate()),
        )}원`,
      );
    }
  }, [data]);

  return { budgetData, data, average, sum };
}
