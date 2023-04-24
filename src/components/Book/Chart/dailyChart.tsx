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
import COLORS from "../../../constants/color";
import getMoneyUnit from "../../../utils/money";

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
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
};

const labels = [...new Array(31).fill(0).map((i, idx) => `${idx + 1}일`)];

export default function DailyChart() {
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: labels.map(() => Math.random()),
        pointRadius: 1,
        pointHitRadius: 0,
        borderColor: COLORS.RED.LIGHT,
        backgroundColor: COLORS.GREY[50],
      },
    ],
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
  return (
    <Container>
      <Info>
        <h4>🔎 4월 총 지출</h4>
        <h5>{getMoneyUnit(756736)}원</h5>
        <p>
          지난 달보다 <span>-59,400원</span>
        </p>
      </Info>
      <Line options={options} data={data} width="500px" height="150px" />
      <RangeInfo>
        <span>1일</span>
        <span>말일</span>
      </RangeInfo>
    </Container>
  );
}
