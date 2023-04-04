import React, { useEffect } from "react";
import Container from "./index.styles";
import useHistory from "../../hooks/book/useHistory";
import PageDefault from "../../components/Book/History/pageDefault";
import HistoryPaging from "../../components/Book/History/paging";

export default function RecordCategory() {
  const {
    categoryId,
    useLoadRecordCategory,
    bookId,
    curPage,
    ITEM_SIZE,
    onChangePage,
  } = useHistory();

  const { data: recordData, refetch: recordHistoryRefetch } =
    useLoadRecordCategory({
      id: bookId,
      categoryId,
      page: curPage - 1,
      size: ITEM_SIZE,
    });

  useEffect(() => {
    recordHistoryRefetch();
  }, [curPage, categoryId]);

  return (
    <Container>
      <PageDefault />
      <HistoryPaging
        data={recordData}
        refetch={recordHistoryRefetch}
        curPage={curPage}
        ITEM_SIZE={ITEM_SIZE}
        onChangePage={onChangePage}
        isIncome={false}
      />
    </Container>
  );
}
