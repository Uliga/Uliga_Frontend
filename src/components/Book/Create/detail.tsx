import styled from "styled-components";
import React from "react";
import Icon from "../../Icon";
import COLORS from "../../../constants/color";
import { TwoPerson } from "../../../assets/person";

const Container = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  margin-bottom: 1rem;
  background-color: ${COLORS.GREY[100]};
  font-size: 1.3rem;
  padding: 1.5rem;
  flex-direction: column;
`;

const Ment = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 0.5rem;
`;

const Top = styled.div`
  width: 100%;
  padding: 1rem;
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const BookName = styled.div`
  font-size: 1.3rem;
  color: ${COLORS.GREY[600]};
`;

const BookInfo = styled.div`
  font-size: 1.3rem;
  color: ${COLORS.GREY[400]};
`;
export default function Detail() {
  return (
    <Container>
      <Ment>
        <Icon iconName="notice" size="1.4rem" /> 다음과 같이 표시됩니다.
      </Ment>
      <Top>
        <TwoPerson />
        <div>
          <BookName>이시원님과의 가계부</BookName>
          <BookInfo>2명의 멤버 (룸메이트)</BookInfo>
        </div>
      </Top>
    </Container>
  );
}
