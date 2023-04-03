import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import getMoneyUnit from "../../../utils/money";
import useBudget from "../../../hooks/book/useBudget";
import PATH from "../../../constants/path";

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
    <S.Right>
      <S.CheckLastMonth>
        <S.dot color={COLORS.GREY[300]}>●</S.dot>
        지난 달 예산 및 결과
        <S.ButtonWrapper>
          {buttons.map(button => (
            <S.RecordButton onClick={button.onClick}>
              <span>{button.title}</span> {button.sub}
            </S.RecordButton>
          ))}
        </S.ButtonWrapper>
      </S.CheckLastMonth>
      {lastMonthData.budget.value === 0 ? (
        <S.NoBudget>
          <p>
            🙅🏻‍♀️&nbsp;&nbsp;&nbsp;설정하신 예산이
            없습니다.&nbsp;&nbsp;&nbsp;예산을 설정하고 계획적으로 관리 해보세요!
          </p>
        </S.NoBudget>
      ) : (
        <>
          <h5>{date.getMonth()}월 예산</h5>
          <S.CheckLastMonthBottom>
            {lastRemainData > 0 ? (
              <h3>{getMoneyUnit(lastRemainData)}원 남음</h3>
            ) : (
              <h3>{getMoneyUnit(lastRemainData)}원 초과</h3>
            )}
          </S.CheckLastMonthBottom>
          <S.Progress color="#F9F9F9">
            {lastRemainData > 0 ? (
              <S.NowPercent
                dealt={100 - lastDataGage}
                color={COLORS.RED.LIGHT}
              />
            ) : (
              <S.NowPercent dealt={100} color={COLORS.RED.LIGHT} />
            )}
            <S.GageIndex>
              {getMoneyUnit(lastMonthData.budget.value)}원
            </S.GageIndex>
          </S.Progress>
        </>
      )}
    </S.Right>
  );
}
