import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
import * as S from "./index.styles";
import useHistory from "../../hooks/book/useHistory";
import HistoryItem from "../../components/Book/History/item";
import Icon from "../../components/Icon";
import { IHistory } from "../../interfaces/book";
import PageDefault from "../../components/Book/History/pageDefault";

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
      <S.Paging>
        {historyData?.content?.map((history: IHistory) => (
          <HistoryItem history={history} isIncome={undefined} />
        ))}
        <Pagination
          activePage={curPage}
          itemsCountPerPage={ITEM_SIZE}
          totalItemsCount={historyData?.totalElements}
          pageRangeDisplayed={5}
          prevPageText={<Icon iconName="arrowLeft" size="1.2rem" />}
          nextPageText={<Icon iconName="arrowRight" size="1.2rem" />}
          hideFirstLastPages
          onChange={onChangePage}
        />
      </S.Paging>
    </S.Container>
  );
}
