import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import COLORS from "../../../constants/color";
import BottomModal from "./BottomModal";
import * as S from "./index.styles";
import {
  bottomModalAtom,
  createModalAtom,
} from "../../../stores/atoms/context";
import allModalAtom from "../../../stores/selectors/context";
import useBook from "../../../hooks/book/useBook";

interface BookNavProps {
  path: string;
}
export default function BookNav({ path }: BookNavProps) {
  const { bookId } = useParams();
  const { useBookList } = useBook();
  const { data } = useBookList();

  const [bottomModalOpen, setBottomModalOpen] = useRecoilState(bottomModalAtom);
  const [createModalOpen, setCreateModalOpen] = useRecoilState(createModalAtom);
  const [, setAllModalAtom] = useRecoilState(allModalAtom);
  const { useReplaceBook } = useBook();

  const bottomModalRef = useRef<HTMLDivElement>(null);
  const etcButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bottomModalRef.current &&
        !bottomModalRef.current.contains(event.target as Node) &&
        (!etcButtonRef.current ||
          !etcButtonRef.current.contains(event.target as Node))
      ) {
        setBottomModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [bottomModalRef, setBottomModalOpen]);
  if (!data) return null;
  console.log("bottomModalOpen", bottomModalOpen); // document.addEventListener("mousedown", handleClickOutside);

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
                    useReplaceBook(path, book.accountBookId);
                  }}
                />
              ),
            )
          : data.accountBooks.slice(0, 4).map(book =>
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
                    useReplaceBook(path, book.accountBookId);
                  }}
                />
              ),
            )}
        <div ref={etcButtonRef}>
          <S.ETCButton
            iconName="dots"
            theme={bottomModalOpen ? "tertiary" : "basic"}
            onClick={() => {
              setAllModalAtom(false);
              setBottomModalOpen(!bottomModalOpen);
            }}
          />
        </div>
        {path.includes("main") && (
          <S.ETCButton
            iconName="plus"
            theme={createModalOpen ? "tertiary" : "basic"}
            onClick={() => {
              setAllModalAtom(false);
              setCreateModalOpen(true);
            }}
          />
        )}
        {bottomModalOpen && (
          <S.Wrapper ref={bottomModalRef}>
            <BottomModal path={path} accountBooks={data.accountBooks} />
          </S.Wrapper>
        )}
      </S.Nav>
    </S.Container>
  );
}
