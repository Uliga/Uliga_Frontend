import React from "react";
import * as S from "./index.styles";
import BookNav from "../../../components/Main/BookNav";
import PATH from "../../../constants/path";
import Schedule from "./Scedule";
import BankingAddForm from "./BankingAddForm";
import BankingAddList from "./BankingAddList";

export default function Add() {
  return (
    <S.Container>
      <BookNav path={`${PATH.BANKING}`} />
      <h3>금융 일정 관리</h3>
      <p>정기적인 지출 / 수입을 저장해두고, 효과적으로 관리해보세요!</p>
      <S.MiddleContainer>
        <BankingAddForm />
        <Schedule />
      </S.MiddleContainer>
    </S.Container>
  );
}
