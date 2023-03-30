import React from "react";
import Pagination from "react-js-pagination";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import * as S from "./index.styles";
import useHistory from "../../hooks/book/useHistory";
import HistoryItem from "../../components/Book/HistoryItem";
import Icon from "../../components/Icon";
import { IHistory } from "../../interfaces/book";
import useBook from "../../hooks/book/useBook";

export default function History() {
  const {
    bookId,
    menuList,
    curPage,
    data,
    content,
    ITEM_SIZE,
    HISTORY_DATA_SIZE,
    onChangePage,
  } = useHistory();
  const { useReplaceBook } = useBook();
  console.log(data);

  return (
    <S.Container>
      <BookNav path={PATH.HISTORY} />
      <S.Top>
        <S.WriteButton
          onClick={() => {
            useReplaceBook(PATH.WRITE, bookId ? +bookId : 0);
          }}
        >
          가계부 작성 ✍🏻
        </S.WriteButton>
        <S.FilterButton
          title="내역 전체보기"
          theme="normal"
          iconName="arrowDown"
          iconSize="1.8rem"
          border={1}
          reverseIconButton
          isIncomeMenu
        />
        <S.FilterButton
          title="카테고리 전체보기"
          theme="normal"
          iconName="arrowDown"
          iconSize="1.8rem"
          border={0.3}
          reverseIconButton
          isIncomeMenu={false}
        />
      </S.Top>
      <S.Menus>
        {menuList.map(menu => (
          <S.Menu size={menu.size}>{menu.title}</S.Menu>
        ))}
      </S.Menus>
      <S.Paging>
        {content?.map((history: IHistory) => (
          <HistoryItem history={history} />
        ))}
        <Pagination
          activePage={curPage}
          itemsCountPerPage={ITEM_SIZE}
          totalItemsCount={HISTORY_DATA_SIZE}
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
