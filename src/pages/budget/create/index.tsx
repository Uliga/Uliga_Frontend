import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import useBudget from "../../../hooks/useBudget";
import { createBudgetModalAtom } from "../../../stores/atoms/context";

export default function Create() {
  const { bookId } = useParams();
  const [, setCreateModalOpen] = useRecoilState(createBudgetModalAtom);

  const budget = useBudget();
  if (!budget) {
    return null;
  }
  const {
    lastRemainData,
    lastMonthData,
    budgets,
    setBudget,
    mutateCreateBudget,
    thisMonthData,
    date,
    mutateUpdateBudget,
  } = budget;
  return (
    <S.Container>
      <h2>{date.getMonth() + 1}월 예산 설정</h2>
      <p>
        이번 달도 잘 해내실거라고 생각해요! &nbsp;&nbsp;저희가 응원합니다 💪🏻
      </p>
      <S.BudgetInput
        size={43.3}
        value={budgets}
        label="금액"
        placeholder={
          thisMonthData.budget.value || "이번 달 예산 금액을 입력해주세요."
        }
        onChange={setBudget}
      />
      <S.LastMonthInfo>
        <div>
          <p>지난 달 예산</p>
          <p style={{ color: COLORS.BLUE }}>{lastMonthData.budget.value}원</p>
        </div>
        <div>
          <p>결과</p>
          <p style={{ color: COLORS.BLUE }}>{lastRemainData}원</p>
          {lastRemainData >= 0 ? (
            <p style={{ color: COLORS.YELLOW }}>남음</p>
          ) : (
            <p style={{ color: COLORS.YELLOW }}>초과</p>
          )}
        </div>
      </S.LastMonthInfo>
      <S.CreateButton
        onClick={() => {
          if (thisMonthData.budget.value) {
            mutateUpdateBudget.mutate({
              id: bookId,
              year: date.getFullYear(),
              month: date.getMonth() + 1,
              value: budgets,
            });
          } else {
            mutateCreateBudget.mutate({
              id: bookId,
              year: date.getFullYear(),
              month: date.getMonth() + 1,
              value: budgets,
            });
          }
          setCreateModalOpen(false);
        }}
        width="100%"
        title={thisMonthData.budget.value ? "예산 수정" : "예산 등록"}
      />
    </S.Container>
  );
}
