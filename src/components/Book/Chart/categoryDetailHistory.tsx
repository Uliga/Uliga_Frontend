import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import getMoneyUnit from "../../../utils/money";
import COLORS from "../../../constants/color";
import useHistory from "../../../hooks/book/useHistory";
import { IHistory } from "../../../interfaces/book";
import HistoryItem from "../History/historyItem";
import Icon from "../../Icon";
import * as S from "../../Main/HistoryModal/index.styles";
import menuList from "./menu";

const Container = styled.div`
  width: 76rem;
  height: 53rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  h5 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
`;

const Top = styled.div`
  position: relative;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid ${COLORS.GREY[300]};
`;

export const WriteButton = styled.button`
  position: absolute;
  bottom: 1.6rem;
  right: 0;
  border: 0.1rem solid ${COLORS.BLUE};
  border-radius: 20rem;
  background-color: white;
  padding: 0.7rem 1.5rem;
  color: ${COLORS.BLUE};
  cursor: pointer;
`;

const PagingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 43rem;
  position: relative;

  .pagination {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    gap: 0.5rem;
    cursor: pointer;
    z-index: 998;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.GREY[600]};
    border-radius: 5rem;
  }

  ul.pagination li:first-child {
    border-radius: 1rem;
  }

  ul.pagination li:last-child {
    border-radius: 1rem;
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${COLORS.GREY[600]};
    font-size: 1.5rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: ${COLORS.BLUE};
  }
`;

export default function CategoryDetailHistory({ category }: { category: any }) {
  const date = new Date();
  const { useLoadMonthRecord } = useHistory();
  const { bookId } = useParams();
  const [curPage, setCurPage] = useState(1);
  const ITEM_SIZE = 8;
  const { data: recordData, refetch: recordHistoryRefetch } =
    useLoadMonthRecord({
      id: bookId,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      page: curPage - 1,
      size: ITEM_SIZE,
      category: category.name,
    });
  const onChangePage = (page: number) => {
    setCurPage(page);
  };
  useEffect(() => {
    recordHistoryRefetch();
  }, [curPage, category.id]);
  if (!recordData) {
    return null;
  }
  console.log("categoryData", category);
  return (
    <Container>
      <Top>
        <h5>{category.title}</h5>
        {category.value === 0 ? (
          <> </>
        ) : (
          <h1>{getMoneyUnit(category.value)}원</h1>
        )}
        <WriteButton>내역 수정하러 가기</WriteButton>
      </Top>
      <PagingWrapper>
        <S.Menus>
          {menuList.map(menu => (
            <S.Menu key={menu.title} size={menu.size}>
              {menu.title}
            </S.Menu>
          ))}
        </S.Menus>
        {recordData?.content?.map((history: IHistory) => (
          <HistoryItem history={history} refetch={recordHistoryRefetch} />
        ))}
        <Pagination
          activePage={curPage}
          itemsCountPerPage={ITEM_SIZE}
          totalItemsCount={recordData?.totalElements || 1}
          pageRangeDisplayed={5}
          prevPageText={<Icon iconName="arrowLeft" size="1.2rem" />}
          nextPageText={<Icon iconName="arrowRight" size="1.2rem" />}
          hideFirstLastPages
          onChange={onChangePage}
        />
      </PagingWrapper>
    </Container>
  );
}
