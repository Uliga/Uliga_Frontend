import React from "react";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import getMoneyUnit from "../../../utils/money";
import useBudget from "../../../hooks/book/useBudget";

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
    <S.Left>
      <h5>{date.getMonth() + 1}월 예산</h5>
      {thisMonthData.budget.value === 0 ? (
        <S.NoBudget>
          <p>
            -&nbsp;&nbsp;&nbsp;설정하신 예산이 없습니다.&nbsp;&nbsp;&nbsp;예산을
            설정하고 계획적으로 관리 해보세요!
          </p>
        </S.NoBudget>
      ) : (
        <>
          {thisRemainData > 0 ? (
            <h3>{getMoneyUnit(thisRemainData)}원 남음</h3>
          ) : (
            <h3>{getMoneyUnit(thisRemainData)}원 초과</h3>
          )}
          <S.Progress color="#F9F9F9">
            {thisRemainData > 0 ? (
              <S.NowPercent
                dealt={100 - thisDataGage}
                color={COLORS.GREEN.DARK}
              />
            ) : (
              <S.NowPercent dealt={100} color={COLORS.BLUE} />
            )}
            <S.BarIndex dealt={100 - thisDataGage}>
              {getMoneyUnit(thisMonthData.budget.value - thisRemainData)}원
            </S.BarIndex>
          </S.Progress>

          <S.InfoBox>
            {infos.map(info => (
              <S.Info key={info.title}>
                <S.dot color={info.color}>●</S.dot>
                <div>
                  <p>{info.title}</p>
                  <span>{info.value}</span>
                </div>
              </S.Info>
            ))}
          </S.InfoBox>
        </>
      )}
    </S.Left>
  );
}
