import React, { useEffect } from "react";
import * as S from "./index.styles";
import useHistory from "../../hooks/book/useHistory";
import PageDefault from "../../components/Book/History/pageDefault";
import HistoryPaging from "../../components/Book/History/paging";

export default function HistoryCategory() {
  const {
    bookId,
    curPage,
    categoryId,
    useLoadHistoryCategory,
    ITEM_SIZE,
    onChangePage,
  } = useHistory();

  const { data: historyData, refetch: historyRefetch } = useLoadHistoryCategory(
    {
      id: bookId,
      categoryId,
      page: curPage - 1,
      size: ITEM_SIZE,
    },
  );
  useEffect(() => {
    historyRefetch();
  }, [curPage, categoryId]);

  return (
    <S.Container>
      <PageDefault />
      <HistoryPaging
        data={historyData}
        curPage={curPage}
        ITEM_SIZE={ITEM_SIZE}
        onChangePage={onChangePage}
        isIncome={undefined}
      />
    </S.Container>
  );
}
