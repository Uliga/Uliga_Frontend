import React from "react";
import styled from "styled-components";
import Empty from "../../../assets/empty";
import COLORS from "../../../constants/color";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
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
      <Empty />
      새로운 초대가 없습니다.
      <br />
      초대가 오면 저희가 알려드릴게요!
    </Container>
  );
}
