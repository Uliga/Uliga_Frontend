import styled from "styled-components";
import React from "react";
import Icon from "../../Icon";
import COLORS from "../../../constants/color";

const Container = styled.div`
  width: 46.5rem;
  border-radius: 1rem;
  display: flex;
  margin-bottom: 1rem;
  background-color: ${COLORS.GREY[100]};
  color: ${COLORS.GREY[600]};
  font-size: 1.2rem;
  padding: 2rem;
  flex-direction: column;
`;

const Ment = styled.div`
  display: flex;
  gap: 1rem;
  line-height: 1.5;
  padding-bottom: 0.5rem;

  span {
    font-weight: 700;
  }
`;

export default function Detail() {
  return (
    <Container>
      <Ment>
        <Icon iconName="notice" size="1.3rem" />
        <div>
          우리가란 <span>{`'우리의 가계부'`}</span>의 줄임말으로,{" "}
          <span>공유 가계부 데스크톱 애플리케이션</span>입니다.
          <br />
          우리가로 가족, 룸메이트, 연인과 함께 지출관리를 해보세요!
        </div>
      </Ment>
    </Container>
  );
}
