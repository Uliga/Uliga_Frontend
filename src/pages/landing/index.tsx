import styled from "styled-components";
import React from "react";
import COLORS from "../../constants/color";
import { LargeLogo } from "../../assets/logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SNSLogin from "./sns";
import useLogin from "../../hooks/useLogin";
import Detail from "./detail";

const Container = styled.div`
  width: 52rem;
  height: 60rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${COLORS.GREY[500]};
    text-align: center;
    padding-bottom: 2.5rem;
  }
  h4 {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    color: ${COLORS.GREY[400]};
    size: 1.5rem;
    text-align: center;
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
      <Wrapper
        onSubmit={e => {
          e.preventDefault();
          mutateCheckEmail.mutate(landingEmail);
        }}
      >
        <div>
          <h2>우리가에 오신것을 환영합니다 🙆🏻‍♀️</h2>
          <Detail />
        </div>
        <Input
          value={landingEmail}
          onChange={onChangeLandingEmail}
          label="이메일"
          size={46.5}
          required
        />
        <StyledButton type="submit" title="이메일로 계속하기" />
        <SNSLogin />
      </Wrapper>
    </Container>
  );
}
