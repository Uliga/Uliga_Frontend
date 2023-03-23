import React from "react";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import * as S from "./index.styles";
import CapsuleBox from "../../components/Main/CapsuleBox";
import COLORS from "../../constants/color";

export default function Schedule() {
  // const dealt = Math.floor((num / maxNum) * 100);

  return (
    <S.Container>
      <BookNav path={PATH.BUDGET} />
      <CapsuleBox />
      <S.BudgetBox>
        <S.LeftBox>
          <h5>3월 예산</h5>
          <h3>195,555원 남음</h3>
          <S.Progress color={COLORS.GREY[300]}>
            <S.Dealt dealt={80} color={COLORS.BLUE} />
            <S.GageBox>
              <S.LateGageIndex dealt={80}>200,000원</S.LateGageIndex>
            </S.GageBox>
          </S.Progress>
          <hr />
          <S.InfoBox>
            <S.Info>
              <S.dot color={COLORS.GREY[300]}>●</S.dot>
              <div>
                <p>3월 설정 예산</p>
                <p>200,000원</p>
              </div>
            </S.Info>
            <S.Info>
              <S.dot color={COLORS.GREY[300]}>●</S.dot>
              <div>
                <p>남은 1일 예산</p>
                <p>200,000원</p>
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
            <h5>3월 예산</h5>
            <h3>195,555원 남음</h3>
          </S.CheckLastMonthBottom>
          <S.Progress color={COLORS.WHITE}>
            <S.Dealt dealt={100} color={COLORS.RED.LIGHT} />
          </S.Progress>
          <S.GageIndex>200,000원</S.GageIndex>
        </S.RightBox>
      </S.BudgetBox>
    </S.Container>
  );
}
