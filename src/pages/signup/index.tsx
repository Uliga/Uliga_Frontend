import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import useSignup from "../../hooks/useSignup";
import * as S from "./index.styles";
import PATH from "../../constants/path";
import TopSection from "../../components/Book/Signup/TopSection";

export default function Signup() {
  const {
    isValidate,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    passwordCheck,
    onChangePasswordCheck,
    code,
    setCode,
    onChangeName,
    onChangeNickname,
    mutateSignup,
    checkEmailCode,
    checkNickname,
    nickName,
    userName,
    AuthTimer,
    showText,
    match,
    exist,
    isChecked,
    handleCheckboxChange,
  } = useSignup();
  const { min, curTime, onStartTimer } = AuthTimer();
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
      onChange: onChangeEmail,
      type: "email",
      placeholder: "",
      readOnly: true,
      isCertification: {
        title: min < 5 ? "재전송" : "인증",
        size: "small",
        disabled: false,
        theme: "quaternary",
        onClick: () => {
          onStartTimer();
        },
      },
    },
    {
      label: "인증번호 입력",
      size: 35.38,
      value: code,
      type: "text",
      onChange: setCode,
      placeholder: "",
      readOnly: false,
      isCertification: {
        title: "인증 완료",
        size: "small",
        disabled: false,
        theme: match || code.length < 0 ? "disabled" : "quaternary",
        onClick: () => {
          checkEmailCode();
        },
      },
    },
    {
      label: "비밀번호",
      size: 46.5,
      value: password,
      onChange: onChangePassword,
      type: "password",
      placeholder: "",
      message: `영문, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로
      입력해주세요.`,
      readOnly: false,
    },
    {
      label: "비밀번호 확인",
      size: 46.5,
      value: passwordCheck,
      onChange: onChangePasswordCheck,
      type: "password",
      placeholder: "",
      message:
        password !== passwordCheck && passwordCheck.length > 0
          ? "비밀번호가 일치하지 않습니다."
          : "",
      readOnly: false,
    },
    {
      label: "이름",
      size: 46.5,
      value: userName,
      onChange: onChangeName,
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
        {InputList.map(input =>
          input.label === "인증번호 입력" ? (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {min < 5 && showText && (
                <S.CodeContainer className="show-text">
                  <Input
                    size={35.38}
                    label="인증번호 입력"
                    value={code}
                    onChange={setCode}
                    placeholder=""
                    readOnly={match || code.length < 0}
                    message={
                      showText && !match
                        ? curTime
                        : "이메일 인증이 완료되었습니다!"
                    }
                  />
                  <S.CodeStyledButton
                    title="인증 완료"
                    size="small"
                    theme={match || code.length < 0 ? "disabled" : "quaternary"}
                    disabled={match || code.length < 0}
                    onClick={input.isCertification?.onClick}
                  />
                </S.CodeContainer>
              )}
            </>
          ) : (
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
          ),
        )}
        <S.Buttons2>
          <S.StyledCheckBox
            type="checkbox"
            value=""
            size={1.5}
            onChange={handleCheckboxChange}
          />
          우리가 개인정보 수집 및 동의 (필수)
          <S.PersonalInfo>
            <Link to={PATH.LOGIN}>자세히</Link>
          </S.PersonalInfo>
        </S.Buttons2>
        <S.Buttons>
          이미 계정이 있으신가요?
          <S.Signup>
            <Link to={PATH.LOGIN}>로그인</Link>
          </S.Signup>
          <S.SignUpStyledButton
            title="계정 만들기"
            width="13.5rem"
            onClick={() => {
              mutateSignup.mutate({
                email,
                password,
                nickName,
                userName,
                applicationPassword,
              });
            }}
            disabled={
              !(
                isValidate &&
                password === passwordCheck &&
                nickName.length > 1 &&
                userName.length > 0 &&
                match &&
                exist &&
                isChecked &&
                passwordCheck.length > 0
              )
            }
          />
        </S.Buttons>
      </S.Container>
    </S.Wrapper>
  );
}
