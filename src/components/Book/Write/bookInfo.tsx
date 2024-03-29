import React from "react";
import { useParams } from "react-router-dom";
import {
  HouseHoldStyledButton,
  TopWrapper,
} from "../../../pages/write/index.styles";
import useBook from "../../../hooks/book/useBook";

export default function BookInfo() {
  const { bookId } = useParams();
  const { useSelectedBook } = useBook();
  const { data } = useSelectedBook(Number(bookId));
  if (!data) return null;

  return (
    <TopWrapper>
      {Number(bookId) === data.info.accountBookId && (
        <HouseHoldStyledButton
          title={data.info.accountBookName}
          size="large"
          theme="basic"
        />
      )}
    </TopWrapper>
  );
}
