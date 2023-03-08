import React from "react";
import Logo from "../../assets/logo";
import Input from "../../components/common/Input";
import useLogin from "../../hooks/useLogin";
import * as S from "./index.styles";

export default function Login() {
  const {
    isValidateEmail,
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
      message:
        !isValidateEmail && email.length > 0
          ? "올바른 이메일 주소를 입력해주세요."
          : "",
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
            message={input.message}
          />
        </div>
      ))}

      <S.StyledButton
        onClick={() => {
          mutateLogin.mutate({ email, password });
        }}
        title="로그인"
        width="13.5rem"
      />
    </S.Container>
  );
}
