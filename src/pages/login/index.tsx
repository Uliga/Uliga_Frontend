import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo";
import Input from "../../components/common/Input";
import useLogin from "../../hooks/useLogin";
import PATH from "../../constants/path";
import * as S from "./index.styles";

export default function Login() {
  const {
    isValidate,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    mutateLogin,
  } = useLogin();

  const inputList = [
    {
      size: 46.5,
      type: "email",
      label: "이메일 주소",
      value: email,
      onChange: onChangeEmail,
      placeholder: "이메일 주소를 입력해주세요.",
    },
    {
      size: 46.5,
      type: "password",
      label: "비밀번호",
      value: password,
      onChange: onChangePassword,
      placeholder: "비밀번호를 입력해주세요.",
    },
  ];

  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
        우리가
      </S.LogoWrapper>
      <S.Title>로그인</S.Title>
      {inputList.map(input => (
        <div>
          <Input
            size={input.size}
            type={input.type}
            label={input.label}
            value={input.value}
            onChange={input.onChange}
            placeholder={input.placeholder}
          />
          {!isValidate && email.length > 0 && input.type === "email" && (
            <S.Warn>올바른 이메일 주소를 입력해주세요.</S.Warn>
          )}
        </div>
      ))}
      <S.Buttons>
        계정이 없으신가요?
        <S.Signup>
          <Link to={PATH.SIGNUP}>회원가입</Link>
        </S.Signup>
        <S.StyledButton
          onClick={() => {
            mutateLogin.mutate({ email, password });
          }}
          title="로그인"
          width="13.5rem"
        />
      </S.Buttons>
    </S.Container>
  );
}
