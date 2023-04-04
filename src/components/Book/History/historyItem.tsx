import React from "react";
import * as S from "./index.styles";
import { IHistory } from "../../../interfaces/book";
import getMoneyUnit from "../../../utils/money";
import { getDayOfWeek } from "../../../utils/date";

export default function HistoryItem({
  history,
  isIncome,
}: {
  history: IHistory;
  isIncome: boolean | undefined;
}) {
  return (
    <S.Wrapper>
      <S.Box width={6}>
        {isIncome !== undefined && (
          <S.IsIncome
            size={1.3}
            title={isIncome ? "수입" : "지출"}
            color="white"
            isIncome={isIncome}
          />
        )}
        {history.type && (
          <S.IsIncome
            size={1.3}
            title={history.type === "INCOME" ? "수입" : "지출"}
            color="white"
            isIncome={history.type === "INCOME"}
          />
        )}
      </S.Box>
      <S.Box width={11}>
        {history.year}. {history.month}. {history.day} (
        {getDayOfWeek(`${history.year}-${history.month}-${history.day}`)})
      </S.Box>
      <S.Box width={9}>{history.category}</S.Box>
      <S.Box width={7}>{history.payment}</S.Box>
      <S.Box width={9}>{history.account}</S.Box>
      <S.Value>{getMoneyUnit(history.value)} 원</S.Value>
      <S.Box width={14}>{history.memo}</S.Box>
      <S.Box width={8}>{history.creator}</S.Box>
      <S.Buttons>
        <S.CommentButton title="💬 코멘트 남기기" theme="basic" />
        <S.EditButton>수정하기</S.EditButton>
        <S.DeleteButton>삭제하기</S.DeleteButton>
      </S.Buttons>
    </S.Wrapper>
  );
}
