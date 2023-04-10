import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { LargeLogo } from "../../assets/logo";
import Input from "../../components/Input";
import Detail from "../../components/Book/Landing/detail";
import SNSLogin from "../../components/Book/Landing/sns";
import * as S from "./index.styles";
import useLogin from "../../hooks/useLogin";
import { loadMe } from "../../api/user";
import { IUserInfo } from "../../interfaces/user";
import PATH from "../../constants/path";

export default function LandingPage() {
  const { landingEmail, onChangeLandingEmail, mutateCheckEmail } = useLogin();
  const navigate = useNavigate();
  useEffect(() => {
    loadMe().then((data: IUserInfo) => {
      if (data) {
        navigate(`${PATH.MAIN}/${data.memberInfo.privateAccountBookId}`);
      }
    });
  }, []);

  return (
    <S.Container>
      <LargeLogo />
      <S.Wrapper
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
        <S.StyledButton type="submit" title="이메일로 계속하기" />
        <SNSLogin />
      </S.Wrapper>
    </S.Container>
  );
}
