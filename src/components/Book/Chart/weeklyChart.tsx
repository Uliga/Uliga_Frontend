import React from "react";
import styled from "styled-components";
import ProgressBar from "../../ProgressBar";
import COLORS from "../../../constants/color";
import getMoneyUnit from "../../../utils/money";
import { getDateRangeUnit } from "../../../utils/date";
import useChart from "../../../hooks/book/useChart";

const Container = styled.div`
  width: 66rem;
  height: 22rem;
  h5 {
    font-size: 1.9rem;
    font-weight: 700;
    padding-bottom: 1rem;
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
  position: relative;
  width: 27rem;
`;
const Record = styled.div`
  text-align: right;
  width: 8rem;
  position: absolute;
  right: 0;
  top: 0;
`;

const ChartWrapper = styled.div`
  width: 30rem;
  position: absolute;
  right: 5rem;
`;

const Result = styled.div`
  position: absolute;
  bottom: -3rem;
  right: 0;
  p {
    font-weight: 300;
    color: ${COLORS.GREY[400]};
  }
  display: flex;
  gap: 1rem;
`;

const Nothing = styled.div`
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${COLORS.GREY[400]};
`;
export default function WeeklyChart() {
  const { weeklyData } = useChart();
  const weekMap = new Map([
    [0, "1주"],
    [1, "2주"],
    [2, "3주"],
    [3, "4주"],
    [4, "5주"],
  ]);

  return (
    <Container>
      <h5>주간별 분석</h5>

      {weeklyData?.sum !== 0 ? (
        weeklyData?.weeklySums.map((ele, idx) => (
          <>
            <Wrapper>
              <Week>
                {new Date().getMonth() + 1}월 {weekMap.get(idx)}
                <span> {getDateRangeUnit(ele.startDay, ele.endDay)}</span>
                <Record>{getMoneyUnit(ele.value)}원</Record>
              </Week>
              <ChartWrapper>
                <ProgressBar
                  targetValue={ele.value}
                  duration={500}
                  color={COLORS.YELLOW}
                  isReversed
                  sum={weeklyData?.sum}
                />
              </ChartWrapper>
            </Wrapper>
            <Result>
              주간 평균 {getMoneyUnit(Math.round(weeklyData.sum / 4))}원
            </Result>
          </>
        ))
      ) : (
        <Nothing>데이터가 없습니다.</Nothing>
      )}
    </Container>
  );
}
