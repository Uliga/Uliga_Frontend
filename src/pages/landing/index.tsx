import styled from "styled-components";
import React from "react";
import COLORS from "../../constants/color";
import { LargeLogo } from "../../assets/logo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import SNSLogin from "./sns";
import useLogin from "../../hooks/useLogin";

const Container = styled.div`
  width: 52rem;
  height: 62rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 0.1rem solid ${COLORS.GREY[300]};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h2 {
    font-weight: 700;
    color: ${COLORS.GREY[400]};
    text-align: center;
  }
  h4 {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    color: ${COLORS.GREY[400]};
    size: 1.5rem;
    text-align: center;
  }
  span {
    width: 10rem;
    border-bottom: 0.1rem solid ${COLORS.GREY[300]};
    display: inline-block;
  }
`;

const StyledButton = styled(Button)`
  padding: 1.7rem;
  font-size: 1.5rem;
`;
export default function LadingPage() {
  const { landingEmail, onChangeLandingEmail, mutateCheckEmail } = useLogin();
  return (
    <Container>
      <LargeLogo />
      <Wrapper>
        <div>
          <h2>반가워요🙋‍</h2>
          <h4>공유 가계부로 편리하게 자산 관리를 해보세요!</h4>
        </div>
        <Input
          value={landingEmail}
          onChange={onChangeLandingEmail}
          label="이메일"
          size={35}
        />
        <StyledButton
          title="이메일로 계속하기"
          onClick={() => {
            mutateCheckEmail.mutate(landingEmail);
          }}
        />
        <SNSLogin />
      </Wrapper>
    </Container>
  );
}
