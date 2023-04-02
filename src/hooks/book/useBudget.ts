import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import QUERYKEYS from "../../constants/querykey";
import { loadMonthAsset } from "../../api/book";

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

  const { data: lastMonthQueryData } = useQuery(
    [QUERYKEYS.LOAD_MONTH_ASSET, lastMonthDate.getMonth()],
    lastMonthQueryFn,
  );

  const thisMonthqueryFn = () =>
    loadMonthAsset(
      Number(bookId),
      `${date.getFullYear()}/${date.getMonth() + 1}`,
    );

  const { data: thisMonthQueryData } = useQuery(
    [QUERYKEYS.LOAD_MONTH_ASSET, date.getMonth()],
    thisMonthqueryFn,
  );
  const [thisMonthData, setThisMonthData] = useState({
    record: {
      value: 0,
    },
    budget: {
      value: 0,
    },
  });
  const [lastMonthData, setLastMonthData] = useState({
    record: {
      value: 0,
    },
    budget: {
      value: 0,
    },
  });
  const [thisRemainData, setThisRemainData] = useState(0);
  const [thisDataGage, setThisDataGage] = useState(0);
  const [lastRemainData, setLastRemainData] = useState(0);
  const [lastDataGage, setLastDataGage] = useState(0);
  const [oneDayBudget, setOneDayBudget] = useState(0);

  useEffect(() => {
    if (thisMonthQueryData?.budget?.value) {
      setThisMonthData(
        Object.assign(thisMonthData, { budget: thisMonthQueryData?.budget }),
      );
    }
    if (thisMonthQueryData?.record) {
      setThisMonthData(
        Object.assign(thisMonthData, { record: thisMonthQueryData?.record }),
      );
    }
    if (lastMonthQueryData?.budget?.value) {
      setLastMonthData(
        Object.assign(lastMonthData, { budget: lastMonthQueryData?.budget }),
      );
    }
    if (lastMonthQueryData?.record) {
      setLastMonthData(
        Object.assign(lastMonthData, { record: thisMonthQueryData?.record }),
      );
    }
    setThisRemainData(thisMonthData.budget.value - thisMonthData.record.value);
    setThisDataGage((thisRemainData / thisMonthData.budget.value) * 100);
    setLastRemainData(lastMonthData.budget.value - lastMonthData.record.value);
    setLastDataGage((lastRemainData / lastMonthData.budget.value) * 100);
    setOneDayBudget(Math.trunc(thisRemainData / lastDate));
    console.log(thisMonthData);
  }, [thisMonthQueryData]);

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
