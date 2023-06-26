import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import Money from "../../../assets/money";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  align-items: center;
  flex-direction: column;
  text-align: center;
  line-height: 1.4;
  font-size: 1.4rem;
  color: ${COLORS.GREY[600]};
`;
export default function Nothing() {
  return (
    <Container>
      <Money />
      새로운 알림이 없습니다.
    </Container>
  );
}
