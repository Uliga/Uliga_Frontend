import React from "react";
import styled from "styled-components";
import BookNav from "../../../components/Main/BookNav";
import PATH from "../../../constants/path";
import COLORS from "../../../constants/color";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  padding: 4rem;
  align-items: center;
  flex-direction: column;
  color: ${COLORS.GREY[600]};
  h1 {
    font-weight: 700;
    font-size: 2rem;
  }
  h4 {
    padding-top: 0.7rem;
    font-size: 1.4rem;
    color: ${COLORS.GREY[400]};
  }
`;

export default function CategoryChart() {
  return (
    <Container>
      <BookNav path={PATH.CATEGORY_CHART} />
    </Container>
  );
}
