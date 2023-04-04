import React, { useEffect } from "react";
import * as S from "./index.styles";
import useHistory from "../../hooks/book/useHistory";
import PageDefault from "../../components/Book/History/pageDefault";
import HistoryPaging from "../../components/Book/History/paging";

export default function History() {
  const { bookId, curPage, useLoadHistory, ITEM_SIZE, onChangePage } =
    useHistory();

  const { data: historyData, refetch: historyRefetch } = useLoadHistory({
    id: bookId,
    page: curPage - 1,
    size: ITEM_SIZE,
  });
  useEffect(() => {
    historyRefetch();
  }, [curPage]);

  return (
    <S.Container>
      <PageDefault />
      <HistoryPaging
        data={historyData}
        refetch={historyRefetch}
        curPage={curPage}
        ITEM_SIZE={ITEM_SIZE}
        onChangePage={onChangePage}
        isIncome={undefined}
      />
    </S.Container>
  );
}
