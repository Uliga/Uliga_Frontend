import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getMoneyUnit from "../../../utils/money";
import COLORS from "../../../constants/color";
import QUERYKEYS from "../../../constants/querykey";
import { loadFixedExpenses } from "../../../api/book";

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
interface Schedule {
  name: string;
  day: number;
  value: number;
}
export default function FixedExpenses() {
  const { bookId } = useParams();
  const date = new Date();
  const queryFn = () => loadFixedExpenses(Number(bookId));
  const { data } = useQuery([QUERYKEYS.LOAD_FIXED_EXPENSES], queryFn);
  if (!data) {
    return null;
  }
  return (
    <Container>
      <h5>{date.getMonth() + 1}월 고정지출</h5>
      <Wrapper>
        {data.schedules.map((schedule: Schedule) => (
          <Schedules>
            <span>{schedule.day}일</span>
            <span>{schedule.name}</span>
            <span>{getMoneyUnit(schedule.value)}원</span>
          </Schedules>
        ))}
      </Wrapper>
      <Result>총 {getMoneyUnit(data.sum)}원</Result>
    </Container>
  );
}
