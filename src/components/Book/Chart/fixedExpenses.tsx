import React from "react";
import styled from "styled-components";
import getMoneyUnit from "../../../utils/money";
import COLORS from "../../../constants/color";

const Container = styled.div`
  width: 45rem;
  height: 22rem;
  h5 {
    font-size: 1.9rem;
    font-weight: 700;
    padding-bottom: 3rem;
  }
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  position: relative;
`;

const Wrapper = styled.div`
  width: 45rem;
  height: 14rem;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0.7rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: ${COLORS.MEDIUM_BLUE}; /* 스크롤바의 색상 */
    border-radius: 2px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.GREY[100]}; /*스크롤바 뒷 배경 색상*/
  }
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const Schedules = styled.div`
  display: flex;
  justify-content: space-between;
  width: 42rem;
  span {
    width: 14rem;
    :last-child {
      text-align: right;
    }
  }
`;

const Result = styled.div`
  position: absolute;
  bottom: -3rem;
  right: 0;
  font-weight: 700;
  display: flex;
  gap: 1rem;
`;

export default function FixedExpenses() {
  const data = [
    {
      day: "7일",
      contents: "보험료 (롯데)",
      value: 45450,
    },
    {
      day: "23일",
      contents: "통신요금 (LGUPLUS)",
      value: 105450,
    },
    {
      day: "23일",
      contents: "넷플릭스",
      value: 12000,
    },
    {
      day: "7일",
      contents: "보험료 (롯데)",
      value: 45450,
    },
    {
      day: "23일",
      contents: "통신요금 (LGUPLUS)",
      value: 105450,
    },
    {
      day: "23일",
      contents: "넷플릭스",
      value: 12000,
    },
    {
      day: "7일",
      contents: "보험료 (롯데)",
      value: 45450,
    },
    {
      day: "23일",
      contents: "통신요금 (LGUPLUS)",
      value: 105450,
    },
    {
      day: "23일",
      contents: "넷플릭스",
      value: 12000,
    },
  ];
  return (
    <Container>
      <h5>4월 고정지출</h5>
      <Wrapper>
        {data.map(schedule => (
          <Schedules>
            <span>{schedule.day}</span>
            <span>{schedule.contents}</span>
            <span>{getMoneyUnit(schedule.value)}원</span>
          </Schedules>
        ))}
      </Wrapper>
      <Result>총 {getMoneyUnit(462900)}원</Result>
    </Container>
  );
}
