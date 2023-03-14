import styled from "styled-components";
import React from "react";
import { useParams } from "react-router-dom";
import COLORS from "../../../../constants/color";
import { IBookList } from "../../../../interfaces/book";
import * as S from "../index.styles";

const Wrapper = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 3px 0px;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  //padding: 2.2rem 1.7rem 3.5rem 1.7rem;
  position: absolute;
  top: 5rem;
  width: 100%;
  flex-direction: column;
  z-index: 999;
  padding-bottom: 2rem;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  display: flex;
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
  // border-bottom: 0.1rem solid ${COLORS.GREY[200]};
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
export default function BottomModal({ accountBooks }: IBookList) {
  const { bookId } = useParams();
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
            />
          ) : (
            <S.UnCheckedButton
              key={book.accountBookId}
              title={book.accountBookName}
              theme="basic"
            />
          ),
        )}
      </Modal>
      <Button>내 가계부 관리</Button>
    </Wrapper>
  );
}
