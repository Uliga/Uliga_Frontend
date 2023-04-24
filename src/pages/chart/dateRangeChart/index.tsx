import React from "react";
import styled from "styled-components";
import BookNav from "../../../components/Main/BookNav";
import PATH from "../../../constants/path";
import COLORS from "../../../constants/color";
import DailyChart from "../../../components/Book/Chart/dailyChart";
import MonthlyChart from "../../../components/Book/Chart/monthlyChart";
import WeeklyChart from "../../../components/Book/Chart/weeklyChart";
import FixedExpenses from "../../../components/Book/Chart/fixedExpenses";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  padding: 4rem 4rem 0 4rem;
  flex-direction: column;
  color: ${COLORS.GREY[600]};
  h3 {
    font-weight: 700;
    font-size: 2rem;
    padding: 2rem 0 1rem 0;
  }
`;

// const DatePickerInput = styled.input`
//   border: none;
//   font-size: 1.9rem;
//   font-weight: 700;
//   width: 15rem;
//   color: ${COLORS.GREY[600]};
//   cursor: pointer;
// `;

const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  padding-top: 1rem;
`;
export default function DateRangeChart() {
  return (
    <Container>
      <BookNav path={PATH.DATE_RANGE_CHART} />
      {/* <DatePickerInput type="month" /> */}
      <ChartWrapper>
        <DailyChart />
        <MonthlyChart />
        <WeeklyChart />
        <FixedExpenses />
      </ChartWrapper>
    </Container>
  );
}
