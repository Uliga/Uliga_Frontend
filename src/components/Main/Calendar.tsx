import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/color";

const Container = styled.div`
  width: 90rem;
  height: 39rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  color: ${COLORS.GREY[500]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Calendar() {
  return <Container>캘린더 라이브러리로 구현 예정</Container>;
}
