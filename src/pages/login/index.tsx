import React from "react";
import Logo from "../../assets/logo";
import Input from "../../components/Input";
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
    <S.Container
      onSubmit={e => {
        e.preventDefault();
        mutateLogin.mutate({ email, password });
      }}
    >
      <S.LogoWrapper>
        <Logo />
        <span>우리가</span>
      </S.LogoWrapper>
      <S.Title>로그인</S.Title>
      {inputList.map(input => (
        <div key={input.label}>
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

      <S.StyledButton type="submit" title="로그인" width="13.5rem" />
    </S.Container>
  );
}
