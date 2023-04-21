import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import Modal from "../../Modal";
import QUERYKEYS from "../../../constants/querykey";
import { loadDayHistory } from "../../../api/book";
import HistoryItem from "../../Book/History/historyItem";
import { IHistory } from "../../../interfaces/book";
import menuList from "./menu";
import getMoneyUnit from "../../../utils/money";
import PATH from "../../../constants/path";
import useBook from "../../../hooks/book/useBook";
import * as S from "./index.styles";
import { historyDayModalAtom } from "../../../stores/atoms/context";

export default function HistoryModal({ date }: { date: any }) {
  const { bookId } = useParams();

  const { useReplaceBook } = useBook();
  const [, setHistoryDayModalOpen] = useRecoilState(historyDayModalAtom);

  const queryFn = () =>
    loadDayHistory({
      id: bookId ? +bookId : 0,
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    });
  const { data } = useQuery([QUERYKEYS.LOAD_DAY_HISTORY], queryFn);

  return (
    <Modal
      closeModal={() => {
        setHistoryDayModalOpen(false);
      }}
      width={90}
    >
      <S.Container>
        <h2>
          {date.getMonth() + 1}월 {date.getDate()}일 가계부 내역
        </h2>
        <S.Middle>
          총{" "}
          <span>
            {data &&
              getMoneyUnit(
                data?.items?.reduce((acc: number, cur: IHistory) => {
                  return acc + Number(cur?.value ? cur?.value : 0);
                }, 0),
              )}
            원
          </span>
          <S.WriteButton
            onClick={() => {
              useReplaceBook(PATH.HISTORY, bookId ? +bookId : 0);
            }}
          >
            내역 수정하러 가기
          </S.WriteButton>
        </S.Middle>
        <S.Menus>
          {menuList.map(menu => (
            <S.Menu key={menu.title} size={menu.size}>
              {menu.title}
            </S.Menu>
          ))}
        </S.Menus>
        <S.HistoryWrapper>
          {data?.items?.map((day: IHistory) => (
            <HistoryItem
              history={day}
              isIncome={undefined}
              refetch={() => {}}
            />
          ))}
        </S.HistoryWrapper>
      </S.Container>
    </Modal>
  );
}
