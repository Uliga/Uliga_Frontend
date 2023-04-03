import React from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import { createBudgetModalAtom } from "../../../stores/atoms/context";
import useBudget from "../../../hooks/book/useBudget";
import useCreateBudget from "../../../hooks/book/useCreateBudget";
import getMoneyUnit from "../../../utils/money";

export default function Create() {
  const [, setCreateModalOpen] = useRecoilState(createBudgetModalAtom);
  const { bookId } = useParams();
  const budget = useBudget();
  if (!budget) {
    return null;
  }
  const { lastRemainData, lastMonthData, thisMonthData, date } = budget;
  const createBudgets = useCreateBudget();
  if (!createBudgets) {
    return null;
  }
  const { mutateUpdateBudget, mutateCreateBudget, budgets, setBudget } =
    createBudgets;
  const selectUpdateCreate = () => {
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
  };
  return (
    <S.BudgetContainer>
      <div>
        <h2>{date.getMonth() + 1}월 예산 설정</h2>
        <p>이번 달도 잘 해내실거라고 생각해요!&nbsp;저희가 응원합니다 💪🏻</p>
      </div>
      <S.InputWrapper>
        <S.BudgetInput
          size={38}
          value={budgets}
          label="금액"
          placeholder={
            getMoneyUnit(thisMonthData.budget.value) ||
            "이번 달 예산 금액을 입력해주세요."
          }
          onChange={setBudget}
        />
        <S.Won>원</S.Won>
      </S.InputWrapper>
      <S.LastMonthInfo>
        <div>
          <p>지난 달 예산</p>
          <p style={{ color: COLORS.BLUE }}>
            {getMoneyUnit(lastMonthData.budget.value)}원
          </p>
        </div>
        <div>
          <p>결과</p>
          <p style={{ color: COLORS.BLUE }}>{getMoneyUnit(lastRemainData)}원</p>
          {lastRemainData >= 0 ? (
            <p style={{ color: COLORS.YELLOW }}>남음</p>
          ) : (
            <p style={{ color: COLORS.YELLOW }}>초과</p>
          )}
        </div>
      </S.LastMonthInfo>
      <S.CreateButton
        onClick={() => {
          selectUpdateCreate();
          setCreateModalOpen(false);
        }}
        width="100%"
        title={thisMonthData.budget.value ? "예산 수정" : "예산 등록"}
      />
    </S.BudgetContainer>
  );
}
