import React, { useEffect } from "react";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import Pagination from "react-js-pagination";
import { IHistory, IHistoryPage } from "../../../interfaces/book";
import HistoryItem from "./historyItem";
import Icon from "../../Icon";
import Button from "../../Button";
import useHistory from "../../../hooks/book/useHistory";
import { deleteHistory } from "../../../api/book";
import toastMsg from "../../Toast";
import COLORS from "../../../constants/color";
import EditForm from "./editForm";

const Container = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${COLORS.GREY[100]};
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 99;
  :hover {
    cursor: pointer;
  }

  > span {
    min-width: fit-content;
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: ${COLORS.GREY[300]};
  }
`;

const StyledCheckbox = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1.5px solid ${COLORS.GREY[300]};
  border-radius: 4px;

  :hover {
    cursor: pointer;
  }

  :checked {
    background: center
      url("data:image/svg+xml,%3Csvg width='13' height='9' viewBox='-1 0 15 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='4.35645' width='2.23443' height='8.73182' rx='1' transform='rotate(-45 0 4.35645)' fill='%237798FC'/%3E%3Crect x='12.9287' width='2.23443' height='12.3435' rx='1' transform='rotate(39.9257 12.9287 0)' fill='%237798FC'/%3E%3C/svg%3E%0A");
    border: 0.1rem solid ${COLORS.BLUE};
    background-repeat: no-repeat;
  }

  :checked ~ span {
    color: #000000;
  }
`;

const DeleteModal = styled.div`
  width: 35rem;
  height: 6rem;
  position: absolute;
  background-color: white;
  top: -13rem;
  z-index: 90;
  right: 0rem;
  box-shadow: rgba(7, 42, 68, 0.1) 0px 4px 14px 0px;
  border-radius: 1rem;
  padding: 2rem;
  font-size: 1.4rem;
  color: ${COLORS.GREY[500]};
  button {
    font-size: 1.2rem;
    padding: 0.7rem 1.2rem;
    border-radius: 20rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

const PagingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 42rem;
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

const AllCheckWrapper = styled.div`
  position: absolute;
  top: -3.24rem;
  left: 1.2rem;
`;

export default function HistoryPaging({
  data,
  refetch,
  isIncome,
  curPage,
  ITEM_SIZE,
  onChangePage,
}: {
  data: IHistoryPage;
  refetch: () => void;
  isIncome: boolean | undefined;
  curPage: number;
  ITEM_SIZE: number;
  onChangePage: (page: number) => void;
}) {
  const {
    checkedList,
    setCheckedList,
    handleDeleteList,
    handleAllChecked,
    allChecked,
    setAllChecked,
    isEditFormOpen,
    setIsEditFormOpen,
  } = useHistory();
  const mutateDeleteHistory = useMutation(
    ["mutateDeleteHistory"],
    deleteHistory,
    {
      onSuccess: () => {
        toastMsg(`선택된 항목 삭제 완료 👏`);
        setCheckedList([]);
        setAllChecked(false);
        refetch();
      },
      onError: ({
        response: {
          data: { errorCode, message },
        },
      }) => {
        toastMsg(`${errorCode} / ${message}`);
      },
    },
  );

  useEffect(() => {
    setAllChecked(false);
    setCheckedList([]);
  }, [curPage]);
  return (
    <PagingWrapper>
      {!isEditFormOpen.open && (
        <AllCheckWrapper>
          <StyledCheckbox
            onChange={() => {
              handleAllChecked(
                data.content.map(item => item.id),
                !allChecked,
              );
              setAllChecked(!allChecked);
            }}
            checked={allChecked}
          />
        </AllCheckWrapper>
      )}
      {checkedList.length > 0 && (
        <DeleteModal>
          <p>{checkedList.length}개의 항목을 선택하셨습니다.</p>
          <Button
            title="선택한 내역 삭제하기"
            theme="unfocus"
            onClick={() => {
              mutateDeleteHistory.mutate({ ids: checkedList });
            }}
          />
        </DeleteModal>
      )}
      {data?.content?.map((history: IHistory) => (
        <Container key={history.id}>
          {!isEditFormOpen.open && (
            <StyledLabel htmlFor={history.id.toString()}>
              <StyledCheckbox
                value={history.id.toString()}
                onChange={() => {
                  handleDeleteList(
                    history.id,
                    !checkedList.includes(history.id),
                  );
                }}
                id={history.id.toString()}
                checked={checkedList.includes(history.id)}
              />
            </StyledLabel>
          )}
          {isEditFormOpen.id === history.id && isEditFormOpen.open ? (
            <EditForm
              history={history}
              refetch={refetch}
              setIsEditFormOpen={setIsEditFormOpen}
            />
          ) : (
            <HistoryItem
              history={history}
              isIncome={isIncome}
              refetch={refetch}
              setCheckedList={setCheckedList}
              setIsEditFormOpen={setIsEditFormOpen}
            />
          )}
        </Container>
      ))}
      <Pagination
        activePage={curPage}
        itemsCountPerPage={ITEM_SIZE}
        totalItemsCount={data?.totalElements || 1}
        pageRangeDisplayed={5}
        prevPageText={<Icon iconName="arrowLeft" size="1.2rem" />}
        nextPageText={<Icon iconName="arrowRight" size="1.2rem" />}
        hideFirstLastPages
        onChange={onChangePage}
      />
    </PagingWrapper>
  );
}
