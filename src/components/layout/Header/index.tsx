import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/logo";
import COLORS from "../../../constants/color";
import Icon from "../../Icon";

const Container = styled.div`
  width: 100%;
  height: 5.5rem;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  position: fixed;
  top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  margin-left: 2rem;
  cursor: pointer;
`;
const StyledIcon = styled(Icon)`
  margin-left: 4rem;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 700;
  color: ${COLORS.BLUE};
`;

export default function Header() {
  return (
    <Container>
      <StyledIcon
        iconName="list"
        size="2rem"
        border={1}
        color={COLORS.GREY[500]}
      />
      <Wrapper>
        <Logo />
        <Title>우리가</Title>
      </Wrapper>
    </Container>
  );
}
