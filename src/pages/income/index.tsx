import React, { useEffect } from "react";
import * as S from "./index.styles";
import useHistory from "../../hooks/book/useHistory";
import PageDefault from "../../components/Book/History/pageDefault";
import HistoryPaging from "../../components/Book/History/paging";

export default function Income() {
  const { bookId, curPage, useLoadIncome, ITEM_SIZE, onChangePage } =
    useHistory();
  const { data: incomeData, refetch: incomeHistoryRefetch } = useLoadIncome({
    id: bookId,
    page: curPage - 1,
    size: ITEM_SIZE,
  });

  useEffect(() => {
    incomeHistoryRefetch();
  }, [curPage]);

  return (
    <S.Container>
      <PageDefault />
      <HistoryPaging
        data={incomeData}
        refetch={incomeHistoryRefetch}
        curPage={curPage}
        ITEM_SIZE={ITEM_SIZE}
        onChangePage={onChangePage}
        isIncome
      />
    </S.Container>
  );
}
