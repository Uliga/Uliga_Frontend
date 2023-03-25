import React from "react";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import * as S from "./index.styles";
import CapsuleBox from "../../components/Main/CapsuleBox";
import COLORS from "../../constants/color";
import getMoneyUnit from "../../utils/money";
import useBudget from "../../hooks/useBudget";

export default function Budget() {
  const budget = useBudget();
  if (!budget) {
    return null; // 예를 들어, 로딩 중일 때는 null을 반환하도록 처리해줄 수 있습니다.
  }
  const {
    thisData,
    thisDataGage,
    thisMonthData,
    oneDayBudget,
    lastData,
    lastDataGage,
    lastMonthData,
    date,
  } = budget;

  console.log("d", budget?.thisData);
  return (
    <S.Container>
      <BookNav path={PATH.BUDGET} />
      <CapsuleBox />
      <S.BudgetBox>
        <S.LeftBox>
          <h5>{date.getMonth() + 1}월 예산</h5>
          {lastData > 0 ? (
            <h3>{getMoneyUnit(thisData)}원 남음</h3>
          ) : (
            <h3>{getMoneyUnit(thisData)}원 초과</h3>
          )}
          <S.Progress color={COLORS.GREY[300]}>
            {thisData > 0 ? (
              <S.Dealt dealt={thisDataGage} color={COLORS.BLUE} />
            ) : (
              <S.Dealt dealt={100} color={COLORS.BLUE} />
            )}
            <S.GageBox>
              <S.LateGageIndex dealt={thisDataGage}>200,000원</S.LateGageIndex>
            </S.GageBox>
          </S.Progress>
          <hr />
          <S.InfoBox>
            <S.Info>
              <S.dot color={COLORS.GREY[300]}>●</S.dot>
              <div>
                <p>{date.getMonth() + 1}월 설정 예산</p>
                <p>{getMoneyUnit(thisMonthData.budget.value)}원</p>
              </div>
            </S.Info>
            <S.Info>
              <S.dot color={COLORS.GREY[300]}>●</S.dot>
              <div>
                <p>남은 1일 예산</p>
                <p>{getMoneyUnit(oneDayBudget)}원</p>
              </div>
            </S.Info>
          </S.InfoBox>
        </S.LeftBox>

        <S.RightBox>
          <S.CheckLastMonth>
            <S.dot color={COLORS.GREY[300]}>●</S.dot>
            지난 달 예산 및 결과
            <div>
              <p>지출 내역 확인하기</p>
              <p>지출 분석 보러하기</p>
            </div>
          </S.CheckLastMonth>
          <S.CheckLastMonthBottom>
            <h5>{date.getMonth()}월 예산</h5>
            {lastData > 0 ? (
              <h3>{getMoneyUnit(lastData)}원 남음</h3>
            ) : (
              <h3>{getMoneyUnit(lastData)}원 초과</h3>
            )}
          </S.CheckLastMonthBottom>
          <S.Progress color={COLORS.WHITE}>
            {lastData > 0 ? (
              <S.Dealt dealt={lastDataGage} color={COLORS.RED.LIGHT} />
            ) : (
              <S.Dealt dealt={100} color={COLORS.RED.LIGHT} />
            )}
          </S.Progress>
          <S.GageIndex>
            {getMoneyUnit(lastMonthData.budget.value)}원
          </S.GageIndex>
        </S.RightBox>
      </S.BudgetBox>
    </S.Container>
  );
}
