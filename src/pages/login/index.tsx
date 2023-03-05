import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo";
import Input from "../../components/common/Input";
import SNSLogin from "./sns";
import useLogin from "../../hooks/useLogin";
import PATH from "../../constants/path";
import * as S from "./index.styles";
import { testLogin } from "../../api/auth";

export default function Login() {
  const { isValidate, email, onChangeEmail, password, onChangePassword } =
    useLogin();
  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
        우리가
      </S.LogoWrapper>
      <S.Title>로그인</S.Title>
      <div>
        <Input
          size={46.5}
          label="이메일 주소"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일 주소를 입력해주세요."
        />
        {!isValidate && email.length > 0 && (
          <S.Warn>올바른 이메일 주소를 입력해주세요.</S.Warn>
        )}
      </div>
      <Input
        size={46.5}
        label="비밀번호"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호를 입력해주세요."
      />
      <S.Buttons>
        계정이 없으신가요?
        <S.Signup>
          <Link to={PATH.SIGNUP}>회원가입</Link>
        </S.Signup>
        <S.StyledButton
          onClick={() => testLogin()}
          title="로그인"
          width="13.5rem"
        />
      </S.Buttons>
      <SNSLogin />
    </S.Container>
  );
}
