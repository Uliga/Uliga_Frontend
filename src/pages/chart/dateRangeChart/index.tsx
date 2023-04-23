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
  h3 {
    font-weight: 700;
    font-size: 2rem;
    padding: 2rem 0 1rem 0;
  }
`;

const DatePickerInput = styled.input`
  border: none;
  font-size: 2rem;
  font-weight: 700;
  color: ${COLORS.GREY[600]};
`;

const Wrapper = styled.div`
  width: 100%;
`;
export default function DateRangeChart() {
  return (
    <Container>
      <BookNav path={PATH.DATE_RANGE_CHART} />
      <Wrapper>
        <DatePickerInput
          type="month"
          value={`${new Date().getFullYear()}-${(new Date().getMonth() + 1)
            .toString()
            .padStart(2, "0")}`}
        />
      </Wrapper>
    </Container>
  );
}
