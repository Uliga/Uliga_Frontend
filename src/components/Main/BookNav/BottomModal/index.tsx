import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import COLORS from "../../../../constants/color";
import { BookInfoTypes } from "../../../../interfaces/book";
import * as S from "../index.styles";
import useBook from "../../../../hooks/book/useBook";
import PATH from "../../../../constants/path";
import allModalAtom from "../../../../stores/selectors/context";

const Title = styled.div`
  margin-bottom: 1rem;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 1.3rem;
  background-color: #f9fafb;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  color: ${COLORS.GREY[500]};
`;
const Modal = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1rem;
  max-width: 80rem;
  flex-wrap: wrap;
  position: relative;
`;

const Button = styled.button`
  cursor: pointer;
  color: ${COLORS.GREY[400]};
  border: none;
  width: 12rem;
  font-size: 1.2rem;
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  background-color: transparent;
  text-decoration: underline;
`;
export default function BottomModal({
  accountBooks,
  path,
}: {
  accountBooks: BookInfoTypes[];
  path: string;
}) {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [, setAllModalOpen] = useRecoilState(allModalAtom);
  const { useReplaceBook } = useBook();
  return (
    <div>
      <Title> 소유중인 가계부</Title>
      <Modal>
        {accountBooks.map(book =>
          Number(bookId) === book.info.accountBookId ? (
            <S.CheckedButton
              key={book.info.accountBookId}
              title={book.info.accountBookName}
              iconName="checkFill"
              theme="tertiary"
              color={COLORS.BLUE}
              onClick={() => {
                useReplaceBook(path, book.info.accountBookId);
              }}
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
      </Modal>
      <Button
        onClick={() => {
          navigate(`${PATH.SETTING}${PATH.BOOK}/${bookId}`);
          setAllModalOpen(false);
        }}
      >
        내 가계부 관리
      </Button>
    </div>
  );
}
