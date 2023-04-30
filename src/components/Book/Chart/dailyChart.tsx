import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import COLORS from "../../../constants/color";
import getMoneyUnit from "../../../utils/money";
import { loadDailyChart } from "../../../api/book";
import QUERYKEYS from "../../../constants/querykey";
import { getLastDate } from "../../../utils/date";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label(value: any) {
          return `${getMoneyUnit(value.parsed.y)}원`;
        },
      },
    },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
};

const Container = styled.div`
  width: 28rem;
  height: 23rem;
  background-color: ${COLORS.GREY[50]};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${COLORS.GREY[600]};
  position: relative;
`;

const Info = styled.div`
  padding: 2rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.3rem;
  h4 {
    font-size: 1.7rem;
  }
  h5 {
    font-size: 2.3rem;
    font-weight: 700;
  }
  p {
    font-weight: 300;
  }
  span {
    color: ${COLORS.BLUE};
  }
`;

const RangeInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  padding: 0.7rem 0.7rem;
  color: ${COLORS.GREY[300]};
  border-top: 0.1rem solid ${COLORS.GREY[300]};
  position: absolute;
  bottom: 0;
`;

interface DailyType {
  day: number;
  value: number;
}
export default function DailyChart() {
  const { bookId } = useParams();
  const date = new Date();
  const lastDate = getLastDate();

  const labels = [
    ...new Array(lastDate).fill(0).map((i, idx) => `${idx + 1}일`),
  ];

  const useDailyChart = (inputData: object) => {
    const queryFn = () => loadDailyChart(inputData);
    const { data } = useQuery([QUERYKEYS.LOAD_DAILY_CHART], queryFn);
    return { data };
  };
  const { data: dailyData } = useDailyChart({
    id: bookId,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });
  if (!dailyData) {
    return null;
  }
  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        data: dailyData.records.map((ele: DailyType) => ele.value),
        pointRadius: 1,
        pointHitRadius: 0,
        borderColor: COLORS.RED.LIGHT,
        backgroundColor: COLORS.GREY[50],
      },
    ],
  };
  console.log(dailyData.diff);
  return (
    <Container>
      <Info>
        <h4>🔎 {date.getMonth() + 1}월 총 지출</h4>
        <h5>{getMoneyUnit(dailyData.sum)}원</h5>
        {dailyData.diff === null ? (
          <p>등록된 지난 달 지출이 없어요!</p>
        ) : (
          <p>
            지난 달보다{" "}
            {dailyData.diff > 0 ? (
              <span>+{dailyData.diff}원</span>
            ) : (
              <span>-{dailyData.diff}원</span>
            )}
          </p>
        )}
      </Info>
      <Line options={options} data={chartData} width="500px" height="150px" />
      <RangeInfo>
        <span>1일</span>
        <span>말일</span>
      </RangeInfo>
    </Container>
  );
}
