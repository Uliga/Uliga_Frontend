import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import ProgressBar from "../../ProgressBar";
import getMoneyUnit from "../../../utils/money";

const Container = styled.div`
  width: 80rem;
  height: 23rem;
  h5 {
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    font-size: 1.2rem;
    color: ${COLORS.GREY[400]};
    font-weight: 300;
  }
  padding: 1rem;
  display: flex;
  position: relative;
  align-items: flex-end;
`;

const WithLastMonth = styled.div`
  border-right: 0.1rem solid ${COLORS.GREY[200]};
  width: 40rem;
  height: 18rem;
  padding: 1rem 2rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WithBudget = styled.div`
  width: 40rem;
  height: 18rem;
  padding: 1rem 2rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bars = styled.div`
  display: flex;
  width: 25rem;
  height: 12.5rem;
  justify-content: center;
  align-items: end;
  gap: 8rem;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export default function MonthlyChart() {
  const monthData = [
    {
      value: 15000,
      duration: 500,
      color: COLORS.GREY[300],
      labels: ["963,913원", "2월 지출"],
    },
    {
      value: 10000,
      duration: 300,
      color: COLORS.GREY[300],
      labels: ["898,913원", "3월 지출"],
    },
    {
      value: 5000,
      duration: 200,
      color: COLORS.BLUE,
      labels: ["446,756원", "4월 지출", "일 평균 14,891원"],
    },
  ];
  const bugetData = [
    {
      value: 10000,
      duration: 300,
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
  return (
    <Container>
      <Info>
        <h5>4월 분석</h5>
        <p>이번 달에는 지난 달보다 {getMoneyUnit(451549)}원 덜 쓰셨어요!</p>
      </Info>
      <WithLastMonth>
        <Bars>
          {monthData.map(bar => (
            <ProgressBar
              targetValue={bar.value}
              duration={bar.duration}
              color={bar.color}
              labels={bar.labels}
              isReversed={false}
            />
          ))}
        </Bars>
      </WithLastMonth>
      <WithBudget>
        <Bars>
          {bugetData.map(bar => (
            <ProgressBar
              targetValue={bar.value}
              duration={bar.duration}
              color={bar.color}
              labels={bar.labels}
              isReversed={false}
            />
          ))}
        </Bars>
      </WithBudget>
    </Container>
  );
}
