import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import COLORS from "../../../constants/color";
import BottomModal from "./BottomModal";
import * as S from "./index.styles";
import {
  bottomModalAtom,
  createModalAtom,
} from "../../../stores/atoms/context";
import useBook from "../../../hooks/useBook";

export default function BookNav() {
  const { bookId } = useParams();
  const { useBookList } = useBook();
  const { data } = useBookList();

  const [bottomModalOpen, setBottomModalOpen] = useRecoilState(bottomModalAtom);
  const [createModalOpen, setCreateModalOpen] = useRecoilState(createModalAtom);
  const { useReplaceBook } = useBook();
  if (!data) return null;
  console.log(data);
  return (
    <S.Container>
      <S.Nav>
        {data.accountBooks.length <= 4
          ? data.accountBooks.map(book =>
              Number(bookId) === book.accountBookId ? (
                <S.CheckedButton
                  key={book.accountBookId}
                  title={book.accountBookName}
                  iconName="checkFill"
                  theme="tertiary"
                  color={COLORS.BLUE}
                />
              ) : (
                <S.UnCheckedButton
                  key={book.accountBookId}
                  title={book.accountBookName}
                  theme="basic"
                  onClick={() => {
                    useReplaceBook(book.accountBookId);
                  }}
                />
              ),
            )
          : data.accountBooks
              .slice(0, 4)
              .map(book =>
                Number(bookId) === book.accountBookId ? (
                  <S.CheckedButton
                    key={book.accountBookId}
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
          iconName="dots"
          theme={bottomModalOpen ? "tertiary" : "basic"}
          onClick={() => {
            setBottomModalOpen(!bottomModalOpen);
          }}
        />
        <S.ETCButton
          iconName="plus"
          theme={createModalOpen ? "tertiary" : "basic"}
          onClick={() => {
            setCreateModalOpen(true);
            setBottomModalOpen(false);
          }}
        />
        {bottomModalOpen && <BottomModal accountBooks={data.accountBooks} />}
      </S.Nav>
    </S.Container>
  );
}
