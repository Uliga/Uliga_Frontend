import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { createBudgetModalAtom } from "../../../stores/atoms/context";
import useBudget from "../../../hooks/book/useBudget";
import useCreateBudget from "../../../hooks/book/useCreateBudget";
import getMoneyUnit from "../../../utils/money";
import COLORS from "../../../constants/color";
import Button from "../../Button";
import Input from "../../Input";
import media from "../../../styles/media";

const BudgetContainer = styled.div`
  width: 41.2rem;
  position: relative;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    font-weight: 700;
    font-size: 2.3rem;
  }
  p {
    margin-top: 1rem;
    font-size: 1.3rem;
    color: ${COLORS.GREY[400]};
  }
`;
const CreateButton = styled(Button)`
  font-size: 1.4rem;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.3rem 0;
  font-weight: 700;
  margin-top: 7rem;
`;

const BudgetInput = styled(Input)`
  margin-top: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  input {
    padding-right: 3rem;
  }
`;
const LastMonthInfo = styled.div`
  background-color: ${COLORS.LIGHT_BLUE};
  border-radius: 0.5rem;
  padding: 0 1.2rem 1.2rem 1.2rem;
  width: 14rem;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  top: 20.2rem;
  div {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 1rem;
  }
  ${media.medium} {
    width: 16rem;
  }
`;

const Won = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1rem;
  font-size: 1.4rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

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
    <BudgetContainer>
      <div>
        <h2>{date.getMonth() + 1}월 예산 설정</h2>
        <p>이번 달도 잘 해내실거라고 생각해요!&nbsp;저희가 응원합니다 💪🏻</p>
      </div>
      <InputWrapper>
        <BudgetInput
          size={38}
          value={budgets.replace(/\D/g, "")}
          label="금액"
          placeholder={
            getMoneyUnit(thisMonthData.budget.value) ||
            "이번 달 예산 금액을 입력해주세요."
          }
          onChange={setBudget}
        />
        <Won>원</Won>
      </InputWrapper>
      <LastMonthInfo>
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
      </LastMonthInfo>
      <CreateButton
        onClick={() => {
          selectUpdateCreate();
          setCreateModalOpen(false);
        }}
        width="100%"
        title={thisMonthData.budget.value ? "예산 수정" : "예산 등록"}
      />
    </BudgetContainer>
  );
}
