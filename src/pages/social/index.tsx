import React from "react";
import Input from "../../components/Input";
import * as S from "./index.styles";
import TopSection from "../../components/Book/Signup/TopSection";
import useSocialSignup from "../../hooks/useSocialSignup";

export default function Social() {
  const {
    onChangeNickname,
    checkNickname,
    nickName,
    userName,
    exist,
    handleCheckboxChange,
    mutateSocialLogin,
    isChecked,
    email,
    loginType,
  } = useSocialSignup();
  const applicationPassword = "1234";
  type InputProps = {
    label: string;
    size: number;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    message?: string;
    placeholder: string;
    readOnly?: boolean;
    isCertification?: {
      title: string;
      size: "large" | "medium" | "small";
      disabled: boolean;
      theme: string;
      onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    };
  };
  const InputList: InputProps[] = [
    {
      label: "이메일 주소",
      size: 38.38,
      value: email,
      type: "email",
      placeholder: "",
      readOnly: true,
      isCertification: {
        title: "인증",
        size: "small",
        disabled: true,
        theme: "quaternary",
      },
    },
    {
      label: "이름",
      size: 46.5,
      value: userName,
      type: "text",
      placeholder: "",
      readOnly: false,
    },
    {
      label: "닉네임",
      size: 38.38,
      value: nickName,
      type: "text",
      onChange: onChangeNickname,
      placeholder: "",
      message: "2글자 이상 입력해주세요.",
      readOnly: false,
      isCertification: {
        title: "확인",
        size: "small",
        disabled: false,
        theme: "quaternary",
        onClick: () => {
          checkNickname();
        },
      },
    },
  ];
  return (
    <S.Wrapper>
      <S.Container>
        <TopSection />
        {InputList.map(input => (
          <S.InputContainer>
            <Input
              key={input.label}
              size={input.size}
              label={input.label}
              value={input.value}
              type={input.type}
              onChange={input.onChange}
              message={input.message}
              placeholder={input.placeholder}
              readOnly={input.readOnly}
            />
            {input.isCertification && (
              <S.CertificationStyledButton
                title={input.isCertification?.title}
                size={input.isCertification?.size}
                disabled={input.isCertification.disabled}
                theme={input.isCertification?.theme}
                onClick={input.isCertification?.onClick}
              />
            )}
          </S.InputContainer>
        ))}
        <S.Buttons2>
          <S.StyledCheckBox
            type="checkbox"
            value=""
            size={1.5}
            onChange={handleCheckboxChange}
          />
          우리가 개인정보 수집 및 동의 (필수)
          <S.PersonalInfo>자세히</S.PersonalInfo>
        </S.Buttons2>
        <S.Buttons>
          <S.SignUpStyledButton
            title="계정 만들기"
            width="13.5rem"
            onClick={() => {
              mutateSocialLogin.mutate({
                email,
                userName,
                nickName,
                loginType,
                applicationPassword,
              });
            }}
            disabled={!(nickName.length > 1 && exist && isChecked)}
          />
        </S.Buttons>
      </S.Container>
    </S.Wrapper>
  );
}
