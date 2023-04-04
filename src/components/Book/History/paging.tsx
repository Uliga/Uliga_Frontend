import React from "react";
import { useMutation } from "@tanstack/react-query";
import Pagination from "react-js-pagination";
import { IHistory, IHistoryPage } from "../../../interfaces/book";
import HistoryItem from "./historyItem";
import * as S from "./index.styles";
import Icon from "../../Icon";
import Button from "../../Button";
import useHistory from "../../../hooks/book/useHistory";
import { deleteHistory } from "../../../api/book";
import toastMsg from "../../Toast";

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
  const { checkedList, setCheckedList, handleDeleteList } = useHistory();
  const mutateDeleteHistory = useMutation(
    ["mutateDeleteHistory"],
    deleteHistory,
    {
      onSuccess: () => {
        toastMsg(`선택된 항목 삭제 완료 👏`);
        setCheckedList([]);
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

  return (
    <S.PagingWrapper>
      {checkedList.length > 0 && (
        <S.DeleteModal>
          <p>{checkedList.length}개의 항목을 선택하셨습니다.</p>
          <Button
            title="선택한 내역 삭제하기"
            theme="unfocus"
            onClick={() => {
              mutateDeleteHistory.mutate({ ids: checkedList });
            }}
          />
        </S.DeleteModal>
      )}
      {data?.content?.map((history: IHistory) => (
        <S.Container key={history.id}>
          <S.StyledLabel htmlFor={history.id.toString()}>
            <S.StyledCheckbox
              value={history.id.toString()}
              onChange={() => {
                handleDeleteList(history.id, !checkedList.includes(history.id));
              }}
              id={history.id.toString()}
              checked={checkedList.includes(history.id)}
            />
          </S.StyledLabel>
          <HistoryItem
            history={history}
            isIncome={isIncome}
            refetch={refetch}
            setCheckedList={setCheckedList}
          />
        </S.Container>
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
    </S.PagingWrapper>
  );
}
