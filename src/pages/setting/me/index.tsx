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
  margin-left: 27.5rem;
`;

export default function SettingMe() {
  return (
    <Container>
      <h3>기본 정보</h3>
    </Container>
  );
}
