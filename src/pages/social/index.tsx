import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Input from "../../components/Input";
import * as S from "./index.styles";
import PATH from "../../constants/path";
import TopSection from "../../components/Book/Signup/TopSection";
import useSocialSignup from "../../hooks/useSocialSignup";
import { IUserInfo } from "../../interfaces/user";
import QUERYKEYS from "../../constants/querykey";
import { loadMe } from "../../api/user";
import LoadingBar from "../../components/LoadingBar";

export default function Social() {
  const {
    onChangeEmail,
    onChangeName,
    onChangeNickname,
    checkNickname,
    nickName,
    exist,
    handleCheckboxChange,
    mutateUpdateNickname,
    isChecked,
  } = useSocialSignup();
  const applicationPassword = "1234";
  const navigate = useNavigate();

  const { isLoading, data } = useQuery<IUserInfo | undefined>(
    [QUERYKEYS.LOAD_ME],
    loadMe,
  );

  if (isLoading || !data)
    return (
      <S.Wrapper>
        <LoadingBar type={6} />
      </S.Wrapper>
    );
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
      value: data.memberInfo.email,
      onChange: onChangeEmail,
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
      value: data.memberInfo.userName,
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
              mutateUpdateNickname.mutate({
                nickName,
                applicationPassword,
              });
              localStorage.setItem("created", "false");
              navigate(`${PATH.MAIN}/${data.memberInfo.privateAccountBookId}`);
            }}
            disabled={!(nickName.length > 1 && exist && isChecked)}
          />
        </S.Buttons>
      </S.Container>
    </S.Wrapper>
  );
}
