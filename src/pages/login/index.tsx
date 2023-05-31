import React from "react";
import Logo from "../../assets/logo";
import Input from "../../components/Input";
import useLogin from "../../hooks/useLogin";
import * as S from "./index.styles";
import Dialog from "../../components/Dialog";

export default function Login() {
  const {
    isValidateEmail,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    mutateLogin,
    resetPasswordDialogOpen,
    setResetPasswordDialogOpen,
    state,
    onClickResetPassword,
  } = useLogin();

  const inputList = [
    {
      size: 46.5,
      type: "email",
      label: "이메일 주소",
      value: email,
      onChange: onChangeEmail,
      readOnly: true,
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
            readOnly={input.readOnly}
          />
        </div>
      ))}
      <S.StyledButton
        type="submit"
        title="로그인"
        width="100%"
        disabled={email.length <= 0 || password.length <= 0 || !isValidateEmail}
      />
      <S.PasswordResetButton
        type="button"
        title="비밀번호 초기화"
        iconName="arrowRight"
        border={1}
        iconSize="1.1rem"
        theme="normal"
        reverseIconButton
        onClick={() => {
          setResetPasswordDialogOpen(true);
        }}
      />
      {resetPasswordDialogOpen && (
        <Dialog
          size={47}
          title="💁🏻‍♀️ 비밀번호 초기화 메일 전송"
          description={`${state}으로 새로운 비밀번호를 보내드릴게요. 
          * 내 정보 페이지에서 원하시는 비밀번호로 설정하실 수 있어요.`}
          cancellable
          visible
          onCancel={() => {
            setResetPasswordDialogOpen(false);
          }}
          onConfirm={onClickResetPassword}
          confirmTitle="전송"
        />
      )}
    </S.Container>
  );
}
