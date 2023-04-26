import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import COLORS from "../../../constants/color";
import getMoneyUnit from "../../../utils/money";
import useBudget from "../../../hooks/book/useBudget";
import PATH from "../../../constants/path";

const Right = styled.div`
  position: relative;
  background-color: ${COLORS.GREY[50]};
  border-radius: 1rem;
  height: 27rem;
  padding: 0rem 3rem;
  width: 57rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 1rem;
  }
  h3 {
    font-weight: bold;
    font-size: 2.1rem;
  }
  h5 {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

const CheckLastMonth = styled.div`
  display: flex;
  p {
    font-weight: 200;
    font-size: 1rem;
  }
`;
const NoBudget = styled.div`
  margin-left: 1rem;
  margin-top: 5rem;
  p {
    font-weight: 300;
    font-size: 1.3rem;
  }
  height: 11rem;
  color: ${COLORS.GREY[400]};
`;
const Dot = styled.span<{ color: string }>`
  ${({ color }) => `
  color: ${color};
  `}
  font-size: 1rem;
  margin-top: 0.3rem;
  margin-right: 1rem;
`;

const Progress = styled.div<{ color: string }>`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${props => props.color};
  position: relative;
  margin: 3rem 0;
  border: 0.1rem solid #e4e4e4;
`;
const NowPercent = styled.div<{ dealt: number; color: string }>`
  background-color: ${props => props.color};
  width: ${props => `${props.dealt}%`};
  border-top-right-radius: ${props => (props.dealt < 100 ? "0" : "0.5rem")};
  border-bottom-right-radius: ${props => (props.dealt < 100 ? "0" : "0.5rem")};
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  margin-bottom: 1rem;
  p {
    font-size: 1rem;
    margin-left: ${props => `${props.dealt * 0.5}rem`};
    padding-top: 3rem;
  }
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RecordButton = styled.button`
  background-color: transparent;
  color: ${COLORS.GREY[400]};
  border: none;
  font-size: 1.2rem;
  span {
    font-weight: 700;
  }
  cursor: pointer;
`;

const GageIndex = styled.div`
  position: absolute;
  font-size: 1.2rem;
  right: 0;
  color: ${COLORS.GREY[400]};
`;

export default function LastMonth() {
  const { lastMonthData, lastRemainData, lastDataGage, date } = useBudget();
  const navigate = useNavigate();
  const { bookId } = useParams();

  const buttons = [
    {
      title: "지출 내역",
      sub: "확인하기",
      onClick: () => navigate(`${PATH.RECORD}/${bookId}`),
    },
    {
      title: "지출 분석",
      sub: "보러가기",
      onClick: () => {},
    },
  ];

  return (
    <Right>
      <CheckLastMonth>
        <Dot color={COLORS.GREY[300]}>●</Dot>
        지난 달 예산 및 결과
        <ButtonWrapper>
          {buttons.map(button => (
            <RecordButton onClick={button.onClick} key={button.title}>
              <span>{button.title}</span> {button.sub}
            </RecordButton>
          ))}
        </ButtonWrapper>
      </CheckLastMonth>
      {lastMonthData.budget.value === 0 ? (
        <NoBudget>
          <p>
            🙅🏻‍♀️&nbsp;&nbsp;&nbsp;설정하신 예산이
            없습니다.&nbsp;&nbsp;&nbsp;예산을 설정하고 계획적으로 관리 해보세요!
          </p>
        </NoBudget>
      ) : (
        <>
          <h5>{date.getMonth()}월 예산</h5>
          <div>
            {lastRemainData > 0 ? (
              <h3>{getMoneyUnit(lastRemainData)}원 남음</h3>
            ) : (
              <h3>{getMoneyUnit(-lastRemainData)}원 초과</h3>
            )}
          </div>
          <Progress color={COLORS.GREY[50]}>
            {lastRemainData > 0 ? (
              <NowPercent dealt={100 - lastDataGage} color={COLORS.RED.LIGHT} />
            ) : (
              <NowPercent dealt={100} color={COLORS.RED.LIGHT} />
            )}
            <GageIndex>{getMoneyUnit(lastMonthData.budget.value)}원</GageIndex>
          </Progress>
        </>
      )}
    </Right>
  );
}
