import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";

const Container = styled.div`
  width: 88rem;
  height: 50rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  h3 {
    font-weight: 700;
  }
`;

export default function SettingBook() {
  return (
    <Container>
      <h3>가계부 정보</h3>
    </Container>
  );
}
