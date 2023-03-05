import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo";
import Input from "../../components/common/Input";
import useLogin from "../../hooks/useLogin";
import * as S from "./index.styles";
import PATH from "../../constants/path";
import { testLogin } from "../../api/auth";

export default function Signup() {
  const {
    isValidate,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    passwordCheck,
    onChangePasswordCheck,
  } = useLogin();
  const [showText, setShowText] = useState(false);

  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoWrapper>
          <Logo />
          우리가
        </S.LogoWrapper>
        <S.PartTitleContainer>
          <S.Title>회원가입</S.Title>
          <S.PartTitle>
            만나서 반가워요! 당신의 건강한 소비 생활을 응원합니다🙋‍♀️
          </S.PartTitle>
        </S.PartTitleContainer>

        <div>
          <S.EmailContainer>
            <Input
              size={38.38}
              label="이메일 주소"
              value={email}
              onChange={onChangeEmail}
              placeholder=""
            />
            <S.CertificationStyledButton
              onClick={() => setShowText(true)}
              title="인증"
              size="small"
            />
          </S.EmailContainer>
          {!isValidate && email.length > 0 && (
            <S.Warn>올바른 이메일 주소를 입력해주세요.</S.Warn>
          )}
        </div>
        {showText ? (
          <S.CodeContainer className="show-text">
            {" "}
            <Input
              size={35.38}
              label="인증번호 입력"
              value="인증번호"
              onChange={onChangeEmail}
              placeholder=""
            />
            <S.CodeStyledButton title="인증 완료" disabled size="small" />
          </S.CodeContainer>
        ) : null}

        <div>
          <Input
            size={46.5}
            label="비밀번호"
            value={password}
            onChange={onChangePassword}
            placeholder=""
          />
          {!isValidate && password.length > 0 && (
            <S.Warn>
              영문, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로
              입력해주세요.
            </S.Warn>
          )}
        </div>
        <div>
          <Input
            size={46.5}
            label="비밀번호 확인"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            placeholder=""
          />
          {password !== passwordCheck && passwordCheck.length > 0 && (
            <S.Warn>비밀번호가 일치하지 않습니다.</S.Warn>
          )}
        </div>
        <Input size={46.5} label="이름" value="이름" placeholder="" />
        <Input size={46.5} label="닉네임" value="닉네임" placeholder="" />
        <S.Buttons2>
          <S.StyledCheckBox type="checkbox" value="" size={1.5} />
          우리가 개인정보 수집 및 동의(필수)
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
            onClick={() => testLogin()}
            title="계정 만들기"
            width="13.5rem"
          />
        </S.Buttons>
      </S.Container>
    </S.Wrapper>
  );
}
