import styled from "styled-components";
import React from "react";
import { useParams } from "react-router-dom";
import COLORS from "../../../../constants/color";
import { BookInfoTypes } from "../../../../interfaces/book";
import * as S from "../index.styles";
import useBook from "../../../../hooks/book/useBook";

const Wrapper = styled.div`
  // background-color: white;
  // box-shadow: rgba(7, 42, 68, 0.2) 0px 4px 14px 0px;
  // border: 0.1rem solid ${COLORS.GREY[200]};
  // border-radius: 0.5rem;
  // display: flex;
  // flex-wrap: wrap;
  // position: absolute;
  // top: 5rem;
  // width: 100%;
  // flex-direction: column;
  // z-index: 999;
  // padding-bottom: 2rem;
`;

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
  const { useReplaceBook } = useBook();
  return (
    <Wrapper>
      <Title> 소유중인 가계부</Title>

      <Modal>
        {accountBooks.map(book =>
          Number(bookId) === book.accountBookId ? (
            <S.CheckedButton
              key={book.accountBookId}
              title={book.accountBookName}
              iconName="checkFill"
              theme="tertiary"
              color={COLORS.BLUE}
              onClick={() => {
                useReplaceBook(path, book.accountBookId);
              }}
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
      </Modal>
      <Button>내 가계부 관리</Button>
    </Wrapper>
  );
}
