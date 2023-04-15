import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import QUERYKEYS from "../../constants/querykey";
import { loadMonthAsset } from "../../api/book";
import { getLastDate } from "../../utils/date";

export default function useBudget() {
  const { bookId } = useParams();
  const date = new Date();
  const lastMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  const lastDate = getLastDate();
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
    if (thisMonthQueryData?.budget) {
      if (thisMonthData.budget.value === 0) {
        setThisMonthData(
          Object.assign(thisMonthData, { budget: thisMonthQueryData?.budget }),
        );
      } else {
        setThisMonthData(
          Object.assign(thisMonthData, { budget: thisMonthQueryData?.budget }),
        );
      }
    }
    if (thisMonthQueryData?.record) {
      if (thisMonthData.record.value === 0) {
        setThisMonthData(
          Object.assign(thisMonthData, { record: thisMonthQueryData?.record }),
        );
      } else {
        setThisMonthData(
          Object.assign(thisMonthData, { record: thisMonthQueryData?.record }),
        );
      }
    }
    if (lastMonthQueryData?.budget && lastMonthData.budget.value === 0) {
      setLastMonthData(
        Object.assign(lastMonthData, { budget: lastMonthQueryData?.budget }),
      );
    }
    if (lastMonthQueryData?.record && lastMonthData.record.value === 0) {
      setLastMonthData(
        Object.assign(lastMonthData, { record: lastMonthQueryData?.record }),
      );
    }
    setThisRemainData(thisMonthData.budget.value - thisMonthData.record.value);
    setLastRemainData(lastMonthData.budget.value - lastMonthData.record.value);
  }, [thisMonthQueryData, lastMonthQueryData]);

  useEffect(() => {
    setThisDataGage((thisRemainData / thisMonthData.budget.value) * 100);
    setLastDataGage((lastRemainData / lastMonthData.budget.value) * 100);
    setOneDayBudget(Math.trunc(thisRemainData / lastDate));
  }, [thisRemainData, lastRemainData]);

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
    thisMonthQueryData,
  };
}
