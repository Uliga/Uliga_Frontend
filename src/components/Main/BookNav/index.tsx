import React, { useRef } from "react";
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
import useDetectOutside from "../../../hooks/book/useDetectOutside";

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
  useDetectOutside({
    refs: [bottomModalRef, etcButtonRef],
    onOutsideClick: () => setBottomModalOpen(false),
  });

  if (!data) return null;

  return (
    <S.Container>
      <S.Nav>
        {data.accountBooks.length <= 4
          ? data.accountBooks.map(book =>
              Number(bookId) === book.info.accountBookId ? (
                <S.CheckedButton
                  key={book.info.accountBookId}
                  title={book.info.accountBookName}
                  iconName="checkFill"
                  theme="tertiary"
                  color={COLORS.BLUE}
                />
              ) : (
                <S.UnCheckedButton
                  key={book.info.accountBookId}
                  title={book.info.accountBookName}
                  theme="basic"
                  onClick={() => {
                    useReplaceBook(path, book.info.accountBookId);
                  }}
                />
              ),
            )
          : data.accountBooks.slice(0, 4).map(book =>
              Number(bookId) === book.info.accountBookId ? (
                <S.CheckedButton
                  key={book.info.accountBookId}
                  title={book.info.accountBookName}
                  iconName="checkFill"
                  theme="tertiary"
                  color={COLORS.BLUE}
                />
              ) : (
                <S.UnCheckedButton
                  key={book.info.accountBookId}
                  title={book.info.accountBookName}
                  theme="basic"
                  onClick={() => {
                    useReplaceBook(path, book.info.accountBookId);
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
