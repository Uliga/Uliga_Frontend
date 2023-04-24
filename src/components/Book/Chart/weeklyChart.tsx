import React from "react";
import styled from "styled-components";
import ProgressBar from "../../ProgressBar";
import COLORS from "../../../constants/color";
import getMoneyUnit from "../../../utils/money";

const Container = styled.div`
  width: 66rem;
  height: 22rem;
  h5 {
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }
  p {
    position: absolute;
    right: 0;
    bottom: 1rem;
    font-size: 1.2rem;
    color: ${COLORS.GREY[400]};
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  padding-bottom: 1rem;
  position: relative;
`;

const Wrapper = styled.div`
  width: 66rem;
  height: 3.3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
`;

const Week = styled.div`
  span {
    color: ${COLORS.GREY[300]};
    font-weight: 300;
  }
  margin-right: 2rem;
`;
const Record = styled.div`
  text-align: right;
  width: 8rem;
`;

const ChartWrapper = styled.div`
  width: 30rem;
  position: absolute;
  right: 5rem;
`;
export default function WeeklyChart() {
  const data = [
    {
      week: "4월 넷째주",
      date: "(04.23 - 04.29)",
      record: 0,
      percentage: 100,
    },
    {
      week: "4월 셋째주",
      date: "(04.16 - 04.22)",
      record: 61262,
      percentage: 3000,
    },
    {
      week: "4월 둘째주",
      date: "(04.09 - 04.15)",
      record: 137350,
      percentage: 6000,
    },
    {
      week: "4월 첫째주",
      date: "(04.02 - 04.08)",
      record: 210644,
      percentage: 9000,
    },
  ];
  return (
    <Container>
      <h5>주간별 분석</h5>
      {data.map(ele => (
        <Wrapper>
          <Week>
            {ele.week} <span>{ele.date}</span>
          </Week>
          <Record>{getMoneyUnit(ele.record)}원</Record>
          <ChartWrapper>
            <ProgressBar
              targetValue={ele.percentage}
              duration={500}
              color={COLORS.YELLOW}
              isReversed
            />
          </ChartWrapper>
        </Wrapper>
      ))}
      <p>주간 평균 {getMoneyUnit(111689)}원</p>
    </Container>
  );
}
