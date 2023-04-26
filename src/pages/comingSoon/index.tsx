import React from "react";
import styled from "styled-components";
import Icon from "../../components/Icon";
import COLORS from "../../constants/color";

const Container = styled.div`
  width: 80rem;
  height: 50rem;
  padding-top: 14rem;
  text-align: center;
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${COLORS.GREY[600]};
  margin-top: 2.5rem;
`;

const SubTitle = styled.div`
  font-size: 1.4rem;
  color: ${COLORS.GREY[400]};
  white-space: pre-line;
  text-align: center;
  line-height: 1.4;
  font-weight: 300;
  margin-top: 1.5rem;
`;

export default function ComingSoon() {
  return (
    <Container>
      <Icon iconName="exclamation" size="10rem" color={COLORS.YELLOW} />
      <Title>서비스 준비중입니다.</Title>
      <SubTitle>빠른 시일내로 준비해서 찾아뵐게요! 감사합니다 🙇🏻</SubTitle>
    </Container>
  );
}
