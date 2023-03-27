import React from "react";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import getMoneyUnit from "../../../utils/money";
import useBudget from "../../../hooks/useBudget";

export default function LastMonth() {
  const budget = useBudget();
  if (!budget) {
    return null;
  }
  const { lastMonthData, lastRemainData, lastDataGage, date } = budget;
  return (
    <S.Right>
      <S.CheckLastMonth>
        <S.dot color={COLORS.GREY[300]}>●</S.dot>
        지난 달 예산 및 결과
        <div>
          <p>지출 내역 확인하기</p>
          <p>지출 분석 보러하기</p>
        </div>
      </S.CheckLastMonth>
      {lastMonthData.budget.value === 0 ? (
        <S.NoBudget>
          <p>
            -&nbsp;&nbsp;&nbsp;설정하신 예산이 없습니다.&nbsp;&nbsp;&nbsp;예산을
            설정하고 계획적으로 관리 해보세요!
          </p>
        </S.NoBudget>
      ) : (
        <>
          <S.CheckLastMonthBottom>
            <h5>{date.getMonth()}월 예산</h5>
            {lastRemainData > 0 ? (
              <h3>{getMoneyUnit(lastRemainData)}원 남음</h3>
            ) : (
              <h3>{getMoneyUnit(lastRemainData)}원 초과</h3>
            )}
          </S.CheckLastMonthBottom>
          <S.Progress color={COLORS.WHITE}>
            {lastRemainData > 0 ? (
              <S.NowPercent
                dealt={100 - lastDataGage}
                color={COLORS.RED.LIGHT}
              />
            ) : (
              <S.NowPercent dealt={100} color={COLORS.RED.LIGHT} />
            )}
          </S.Progress>
          <S.GageIndex>
            {getMoneyUnit(lastMonthData.budget.value)}원
          </S.GageIndex>
        </>
      )}
    </S.Right>
  );
}
