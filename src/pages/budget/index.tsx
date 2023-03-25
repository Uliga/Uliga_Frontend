import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import * as S from "./index.styles";
import CapsuleBox from "../../components/Main/CapsuleBox";
import COLORS from "../../constants/color";
import { loadMonthAsset } from "../../api/book";
import QUERYKEYS from "../../constants/querykey";
import getMoneyUnit from "../../utils/money";

export default function Schedule() {
  const { bookId } = useParams();
  const date = new Date();
  const lastMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);

  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    0,
  ).getDate();
  console.log("보자보자", lastDate);
  const lastMonthQueryFn = () =>
    loadMonthAsset(
      Number(bookId),
      `${lastMonthDate.getFullYear()}/${lastMonthDate.getMonth() + 1}`,
    );

  const { data: lastMonthData } = useQuery(
    [QUERYKEYS.LOAD_MONTH_ASSET, lastMonthDate.getMonth()],
    lastMonthQueryFn,
  );

  const queryFn = () =>
    loadMonthAsset(
      Number(bookId),
      `${date.getFullYear()}/${date.getMonth() + 1}`,
    );

  const { data: thisMonthData } = useQuery(
    [QUERYKEYS.LOAD_MONTH_ASSET, date.getMonth()],
    queryFn,
  );

  if (!thisMonthData) {
    return null;
  }
  if (!lastMonthData) {
    return null;
  }
  console.log("data1", thisMonthData);
  console.log("data2", lastMonthData);

  const thisData =
    thisMonthData.budget.value +
    thisMonthData.income.value -
    thisMonthData.record.value;
  const oneDayBudget = Math.trunc(thisData / lastDate);

  console.log("oneday", oneDayBudget);
  const thisDataGage = (thisData / thisMonthData.budget.value) * 100;
  const lastData =
    lastMonthData.budget.value +
    lastMonthData.income.value -
    lastMonthData.record.value;
  const lastDataGage = (lastData / lastMonthData.budget.value) * 100;

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
