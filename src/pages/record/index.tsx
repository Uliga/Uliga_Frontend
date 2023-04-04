import React, { useEffect } from "react";
import Container from "./index.styles";
import useHistory from "../../hooks/book/useHistory";
import PageDefault from "../../components/Book/History/pageDefault";
import HistoryPaging from "../../components/Book/History/paging";

export default function Record() {
  const { bookId, curPage, useLoadRecord, ITEM_SIZE, onChangePage } =
    useHistory();
  const { data: recordData, refetch: recordHistoryRefetch } = useLoadRecord({
    id: bookId,
    page: curPage - 1,
    size: ITEM_SIZE,
  });

  useEffect(() => {
    recordHistoryRefetch();
  }, [curPage]);

  return (
    <Container>
      <PageDefault />
      <HistoryPaging
        data={recordData}
        curPage={curPage}
        ITEM_SIZE={ITEM_SIZE}
        onChangePage={onChangePage}
        isIncome={false}
      />
    </Container>
  );
}
