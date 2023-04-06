import React from "react";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { IHistory } from "../../../interfaces/book";
import getMoneyUnit from "../../../utils/money";
import { getDayOfWeek } from "../../../utils/date";
import { deleteHistory } from "../../../api/book";
import Badge from "../../Badge";
import COLORS from "../../../constants/color";
import Button from "../../Button";
import toastMsg from "../../Toast";

const Wrapper = styled.div`
  display: flex;
  min-height: 4.5rem;
  gap: 2rem;
  width: 90rem;
  align-items: center;
  font-size: 1.3rem;
  margin-left: 5rem;
  div {
    overflow: hidden;
    word-wrap: break-word;
  }
`;

const Box = styled.div<{ width: number }>`
  ${({ width }) => `
       width: ${width}rem;
`}
  display: flex;
`;

const IsIncome = styled(Badge)<{ isIncome: boolean }>`
  ${({ isIncome }) => `
  background-color: ${isIncome ? COLORS.RED.LIGHT : COLORS.GREEN.DARK};
  `}
`;

const Value = styled.div`
  color: ${COLORS.BLUE};
  width: 8rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 2rem;
  height: 4.5rem;
  align-items: center;
  button {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const CommentButton = styled(Button)`
  height: 2.5rem;
`;

const EditButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${COLORS.BLUE};
`;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${COLORS.GREY[400]};
`;

export default function HistoryItem({
  history,
  isIncome,
  refetch,
  setCheckedList,
}: {
  history: IHistory;
  isIncome: boolean | undefined;
  refetch: () => void;
  setCheckedList: any;
}) {
  const mutateDeleteHistory = useMutation(
    ["mutateDeleteHistory"],
    deleteHistory,
    {
      onSuccess: () => {
        toastMsg(`선택된 항목 삭제 완료 👏`);
        setCheckedList([]);
        refetch();
      },
      onError: ({
        response: {
          data: { errorCode, message },
        },
      }) => {
        toastMsg(`${errorCode} / ${message}`);
      },
    },
  );

  return (
    <Wrapper>
      <Box width={6}>
        {isIncome !== undefined && (
          <IsIncome
            size={1.3}
            title={isIncome ? "수입" : "지출"}
            color="white"
            isIncome={isIncome}
          />
        )}
        {history.type && (
          <IsIncome
            size={1.3}
            title={history.type === "INCOME" ? "수입" : "지출"}
            color="white"
            isIncome={history.type === "INCOME"}
          />
        )}
      </Box>
      <Box width={11}>
        {history.year}. {history.month}. {history.day} (
        {getDayOfWeek(`${history.year}-${history.month}-${history.day}`)})
      </Box>
      <Box width={9}>{history.category}</Box>
      <Box width={7}>{history.payment}</Box>
      <Box width={9}>{history.account}</Box>
      <Value>{getMoneyUnit(history.value)} 원</Value>
      <Box width={14}>{history.memo}</Box>
      <Box width={8}>{history.creator}</Box>
      <Buttons>
        <CommentButton title="💬 코멘트 남기기" theme="basic" />
        <EditButton>수정하기</EditButton>
        <DeleteButton
          onClick={() => {
            mutateDeleteHistory.mutate({ ids: [history.id] });
          }}
        >
          삭제하기
        </DeleteButton>
      </Buttons>
    </Wrapper>
  );
}
