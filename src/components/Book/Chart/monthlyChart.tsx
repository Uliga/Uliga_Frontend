import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import ProgressBar from "../../ProgressBar";
import getMoneyUnit from "../../../utils/money";
import useChart from "../../../hooks/book/useChart";

const Container = styled.div`
  width: 80rem;
  height: 23rem;
  h5 {
    font-size: 1.9rem;
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
  height: 9rem;
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
  const { budgetData, monthData, sum, average, diff } = useChart();

  if (!monthData || !budgetData) {
    return null;
  }
  return (
    <Container>
      <Info>
        <h5>{new Date().getMonth() + 1}월 분석</h5>
        <p>
          {diff === null && `비교할 지난 달 기록이 없습니다.`}
          {diff !== null &&
            (diff > 0
              ? `이번 달에는 지난 달 보다 ${getMoneyUnit(diff)}원 덜 쓰셨어요!`
              : `이번 달에는 지난 달 보다 ${getMoneyUnit(
                  Math.abs(diff),
                )}원 더 많이 쓰셨어요!`)}
        </p>
      </Info>
      <WithLastMonth>
        <Bars>
          {monthData?.compare?.reverse().map((bar, idx) => (
            <ProgressBar
              targetValue={bar.value}
              duration={500}
              color={idx === 2 ? COLORS.BLUE : COLORS.GREY[300]}
              labels={[
                `${getMoneyUnit(bar.value)}원`,
                `${bar.month}월 지출`,
                idx === 2 ? average : "",
              ]}
              sum={sum}
              isReversed={false}
            />
          ))}
        </Bars>
      </WithLastMonth>
      <WithBudget>
        <Bars>
          {budgetData && (
            <>
              <ProgressBar
                targetValue={budgetData?.budget}
                duration={500}
                color={COLORS.GREY[300]}
                labels={[
                  `${getMoneyUnit(budgetData?.budget)}원`,
                  `${new Date().getMonth() + 1}월 예산`,
                ]}
                isReversed={false}
                sum={budgetData.spend + budgetData.budget}
              />
              <ProgressBar
                targetValue={budgetData?.spend}
                duration={500}
                color={COLORS.GREEN.DARK}
                labels={[
                  `${getMoneyUnit(budgetData?.spend)}원`,
                  `${new Date().getMonth() + 1}월 지출`,
                  budgetData.diff !== 0
                    ? `${budgetData?.diff > 0 ? `+` : ``}${getMoneyUnit(
                        budgetData?.diff,
                      )}원`
                    : "",
                ]}
                isReversed={false}
                sum={budgetData.spend + budgetData.budget}
              />
            </>
          )}
        </Bars>
      </WithBudget>
    </Container>
  );
}
