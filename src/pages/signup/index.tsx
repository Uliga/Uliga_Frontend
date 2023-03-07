import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo";
import Input from "../../components/common/Input";
import useSignup from "../../hooks/useSignup";
import * as S from "./index.styles";
import PATH from "../../constants/path";

export default function Signup() {
  const {
    isValidate,
    email,
    password,
    onChangePassword,
    passwordCheck,
    onChangePasswordCheck,
    mutateEmailSend,
    mutateCodeCheck,
    code,
    setCode,
    onChangeName,
    onChangeNickname,
    mutateSignup,
    nickName,
    userName,
    mutateNickCheck,
    AuthTimer,
    showText,
    setShowText,
    match,
    setMatch,
    exist,
    setExist,
    isChecked,
    handleCheckboxChange,
  } = useSignup();
  const { time, min, sec, onStartTimer } = AuthTimer();
  const applicationPassword = "1234";
  const { state } = useLocation();
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
              value={state}
              placeholder=""
            />
            {match ? (
              <S.CertificationStyledButton
                disabled
                title={min < 5 ? "재전송" : "인증"}
                size="small"
              />
            ) : (
              <S.CertificationStyledButton
                onClick={() => {
                  setShowText(true);
                  mutateEmailSend.mutate({ email: state });
                  onStartTimer();
                }}
                title={min < 5 ? "재전송" : "인증"}
                size="small"
              />
            )}
          </S.EmailContainer>
          {min < 5 && showText ? (
            <S.CodeContainer className="show-text">
              <Input
                size={35.38}
                label="인증번호 입력"
                value={code}
                onChange={setCode}
                placeholder=""
              />
              {code.length > 0 && !match ? (
                <S.CodeStyledButton
                  title="인증 완료"
                  size="small"
                  onClick={() => {
                    mutateCodeCheck.mutate({ email: state, code });
                    setMatch(mutateCodeCheck.data.matches);
                  }}
                />
              ) : (
                <S.CodeStyledButton title="인증 완료" disabled size="small" />
              )}
            </S.CodeContainer>
          ) : null}
          {/* eslint-disable-next-line no-nested-ternary */}
          {!showText ? null : !match ? (
            time.current <= 0 ? (
              <S.Warn>
                입력시간이 초과되었습니다. 재전송 버튼을 눌러주세요.
              </S.Warn>
            ) : (
              <S.Warn>
                {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
              </S.Warn>
            )
          ) : (
            <S.Warn>이메일 인증이 완료되었습니다!</S.Warn>
          )}
        </div>

        <div>
          <Input
            size={46.5}
            label="비밀번호"
            value={password}
            type="password"
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
            type="password"
            onChange={onChangePasswordCheck}
            placeholder=""
          />
          {password !== passwordCheck && passwordCheck.length > 0 && (
            <S.Warn>비밀번호가 일치하지 않습니다.</S.Warn>
          )}
        </div>
        <Input
          size={46.5}
          label="이름"
          value={userName}
          onChange={onChangeName}
          placeholder=""
        />
        <div>
          <S.EmailContainer>
            <Input
              size={38.38}
              label="닉네임"
              value={nickName}
              onChange={onChangeNickname}
              placeholder=""
            />
            <S.CertificationStyledButton
              onClick={() => {
                mutateNickCheck.mutate(nickName);
                setExist(mutateNickCheck.data);
              }}
              title="확인"
              size="small"
            />
          </S.EmailContainer>
          {!isValidate && nickName.length > 0 && nickName.length < 2 && (
            <S.Warn>2글자 이상 입력해주세요.</S.Warn>
          )}
        </div>
        <S.Buttons2>
          <S.StyledCheckBox
            type="checkbox"
            value=""
            size={1.5}
            onChange={handleCheckboxChange}
          />
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
          {isValidate &&
          password === passwordCheck &&
          nickName.length > 1 &&
          userName.length > 0 &&
          match &&
          exist &&
          isChecked &&
          passwordCheck.length > 0 ? (
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
            />
          ) : (
            <S.SignUpStyledButton
              title="계정 만들기"
              width="13.5rem"
              disabled
            />
          )}
        </S.Buttons>
      </S.Container>
    </S.Wrapper>
  );
}
