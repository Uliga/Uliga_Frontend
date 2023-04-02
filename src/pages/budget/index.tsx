import React from "react";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import CapsuleBox from "../../components/Main/CapsuleBox";
import * as S from "./index.styles";
import LastMonth from "../../components/Book/Budget/lastMonth";
import CurMonth from "../../components/Book/Budget/curMonth";

export default function Budget() {
  return (
    <S.Container>
      <BookNav path={PATH.BUDGET} />
      <CapsuleBox />
      <S.BudgetBox>
        <CurMonth />
        <LastMonth />
      </S.BudgetBox>
    </S.Container>
  );
}
