import React from "react";
import Logo from "../../assets/logo";
import * as S from "./index.styles";

export default function TopSection() {
  return (
    <>
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
    </>
  );
}
