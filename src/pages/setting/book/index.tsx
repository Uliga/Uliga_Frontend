import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import BookItem from "../../../components/Book/Setting/bookItem";

const Container = styled.div`
  width: 88rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: start;
  h3 {
    font-weight: 700;
  }
  margin-left: 27.5rem;
`;

export default function SettingBook() {
  return (
    <Container>
      <h3>내가 소유한 가계부</h3>
      <BookItem />
    </Container>
  );
}
