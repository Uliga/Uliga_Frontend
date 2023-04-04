import React from "react";
import Pagination from "react-js-pagination";
import { IHistory, IHistoryPage } from "../../../interfaces/book";
import HistoryItem from "./item";
import * as S from "./index.styles";
import Icon from "../../Icon";

export default function HistoryPaging({
  data,
  isIncome,
  curPage,
  ITEM_SIZE,
  onChangePage,
}: {
  data: IHistoryPage;
  isIncome: boolean | undefined;
  curPage: number;
  ITEM_SIZE: number;
  onChangePage: (page: number) => void;
}) {
  return (
    <S.PagingWrapper>
      {data?.content?.map((history: IHistory) => (
        <HistoryItem history={history} isIncome={isIncome} />
      ))}
      <Pagination
        activePage={curPage}
        itemsCountPerPage={ITEM_SIZE}
        totalItemsCount={data?.totalElements}
        pageRangeDisplayed={5}
        prevPageText={<Icon iconName="arrowLeft" size="1.2rem" />}
        nextPageText={<Icon iconName="arrowRight" size="1.2rem" />}
        hideFirstLastPages
        onChange={onChangePage}
      />
    </S.PagingWrapper>
  );
}
