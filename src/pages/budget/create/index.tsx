import React from "react";
import * as S from "./index.styles";
import useCreateBudget from "../../../hooks/book/useCreateBudget";
import COLORS from "../../../constants/color";

export default function Create() {
  const { budget, setBudget } = useCreateBudget();

  return (
    <S.Container>
      <h2>3월 예산 설정</h2>
      <p>
        이번 달도 잘 해내실거라고 생각해요! &nbsp;&nbsp;저희가 응원합니다
        &nbsp;💪🏻
      </p>
      <S.BudgetInput
        size={43.3}
        value={budget}
        label="금액"
        placeholder="이번 달 예산 금액을 입력해주세요."
        onChange={setBudget}
      />
      <S.LastMonthInfo>
        <div>
          <p>지난 달 예산</p>
          <p style={{ color: COLORS.BLUE }}>800,000원</p>
        </div>
        <div>
          <p>결과</p>
          <p style={{ color: COLORS.BLUE }}>128,000원</p>
          <p style={{ color: COLORS.YELLOW }}>초과</p>
        </div>
      </S.LastMonthInfo>
      <S.CreateButton onClick={() => {}} width="100%" title="예산 등록" />
    </S.Container>
  );
}
