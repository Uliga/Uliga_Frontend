import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import getMoneyUnit from "../../../utils/money";
import useBudget from "../../../hooks/book/useBudget";

const Left = styled.div`
  position: relative;
  width: 55rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    font-weight: bold;
    font-size: 2.1rem;
  }
  h5 {
    font-size: 1.5rem;
  }
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 0;
  margin-top: 1rem;
  border-top: 0.1rem solid ${COLORS.GREY[200]};
  span {
    font-weight: 700;
  }
`;
const Info = styled.div`
  display: flex;
  div {
    display: flex;
    gap: 4rem;
  }

  p {
    width: 10rem;
  }
`;

const Dot = styled.span<{ color: string }>`
  ${({ color }) => `
  color: ${color};
  `}
  font-size: 1rem;
  margin-top: 0.3rem;
  margin-right: 1rem;
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

const BarIndex = styled.div<{ dealt: number }>`
  margin-left: ${props => (props.dealt < 90 ? `${props.dealt}%` : "0")};
  position: absolute;
  font-size: 1.2rem;
  color: ${COLORS.GREY[400]};
  right: ${props => (props.dealt < 90 ? "1" : "0")};
`;

export default function CurMonth() {
  const { thisRemainData, thisDataGage, thisMonthData, oneDayBudget, date } =
    useBudget();

  const infos = [
    {
      color: COLORS.GREY[300],
      title: `${date.getMonth() + 1}월 예산`,
      value: `${getMoneyUnit(thisMonthData.budget.value)}원`,
    },
    {
      color: COLORS.GREY[300],
      title: `남은 1일 예산`,
      value: `${getMoneyUnit(oneDayBudget)}원`,
    },
  ];
  return (
    <Left>
      <h5>{date.getMonth() + 1}월 예산</h5>
      {thisMonthData.budget.value === 0 ? (
        <NoBudget>
          <p>
            -&nbsp;&nbsp;&nbsp;설정하신 예산이 없습니다.&nbsp;&nbsp;&nbsp;예산을
            설정하고 계획적으로 관리 해보세요!
          </p>
        </NoBudget>
      ) : (
        <>
          {thisRemainData > 0 ? (
            <h3>{getMoneyUnit(thisRemainData)}원 남음</h3>
          ) : (
            <h3>{getMoneyUnit(thisRemainData)}원 초과</h3>
          )}
          <Progress color="#F9F9F9">
            {thisRemainData > 0 ? (
              <NowPercent
                dealt={100 - thisDataGage}
                color={COLORS.GREEN.DARK}
              />
            ) : (
              <NowPercent dealt={100} color={COLORS.BLUE} />
            )}
            <BarIndex dealt={100 - thisDataGage}>
              {getMoneyUnit(thisMonthData.budget.value - thisRemainData)}원
            </BarIndex>
          </Progress>

          <InfoBox>
            {infos.map(info => (
              <Info key={info.title}>
                <Dot color={info.color}>●</Dot>
                <div>
                  <p>{info.title}</p>
                  <span>{info.value}</span>
                </div>
              </Info>
            ))}
          </InfoBox>
        </>
      )}
    </Left>
  );
}
