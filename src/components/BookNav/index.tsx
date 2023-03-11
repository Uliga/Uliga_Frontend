import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import COLORS from "../../constants/color";
import QUERYKEYS from "../../constants/querykey";
import { loadBookList } from "../../api/book";
import { IBookList } from "../../interfaces/book";
import BottomModal from "./BottomModal";
import * as S from "./index.styles";
import { bottomModalAtom, createModalAtom } from "../../stores/atoms/context";

export default function BookNav() {
  const { bookId } = useParams();
  const { data } = useQuery<IBookList>(
    [QUERYKEYS.LOAD_BOOK_LIST],
    loadBookList,
  );
  const [bottomModalOpen, setBottomModalOpen] = useRecoilState(bottomModalAtom);
  const [createModalOpen, setCreateModalOpen] = useRecoilState(createModalAtom);

  if (!data) return null;
  console.log(data);
  console.log(bookId);
  return (
    <S.Container>
      <S.Nav>
        {data.accountBooks.length <= 4
          ? data.accountBooks.map(book =>
              Number(bookId) === book.accountBookId ? (
                <S.CheckedButton
                  title={book.accountBookName}
                  iconName="checkFill"
                  theme="tertiary"
                  color={COLORS.BLUE}
                />
              ) : (
                <S.UnCheckedButton title={book.accountBookName} theme="basic" />
              ),
            )
          : data.accountBooks
              .slice(0, 4)
              .map(book =>
                Number(bookId) === book.accountBookId ? (
                  <S.CheckedButton
                    title={book.accountBookName}
                    iconName="checkFill"
                    theme="tertiary"
                    color={COLORS.BLUE}
                  />
                ) : (
                  <S.UnCheckedButton
                    title={book.accountBookName}
                    theme="tertiary"
                  />
                ),
              )}
        <S.ETCButton
          iconName="plus"
          theme={createModalOpen ? "tertiary" : "basic"}
          onClick={() => {
            setCreateModalOpen(true);
          }}
        />
        <S.ETCButton
          iconName="dots"
          theme={bottomModalOpen ? "tertiary" : "basic"}
          onClick={() => {
            setBottomModalOpen(!bottomModalOpen);
          }}
        />
        {bottomModalOpen && <BottomModal accountBooks={data.accountBooks} />}
      </S.Nav>
    </S.Container>
  );
}
