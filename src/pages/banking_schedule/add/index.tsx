import React from "react";
import * as S from "./index.styles";
import BookNav from "../../../components/Main/BookNav";
import PATH from "../../../constants/path";
import Schedule from "./Scedule";
import COLORS from "../../../constants/color";
import Button from "../../../components/Button";
import BankingAddBox from "./BankingAddBox";

const schedueAddList = [
  {
    title: "월세, 생활비 입금",
    day: "매달 8일",
    price: "600,000원",
    isIncome: "수입",
    description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
    onClick: "삭제 기능",
  },
  {
    title: "월세, 생활비 입금",
    day: "매달 8일",
    price: "600,000원",
    isIncome: "수입",
    description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
    onClick: "삭제 기능",
  },
  {
    title: "월세, 생활비 입금",
    day: "매달 8일",
    price: "600,000원",
    isIncome: "수입",
    description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
    onClick: "삭제 기능",
  },
  {
    title: "월세, 생활비 입금",
    day: "매달 8일",
    price: "600,000원",
    isIncome: "수입",
    description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
    onClick: "삭제 기능",
  },
  {
    title: "월세, 생활비 입금",
    day: "매달 8일",
    price: "600,000원",
    isIncome: "수입",
    description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
    onClick: "삭제 기능",
  },
  {
    title: "월세, 생활비 입금",
    day: "매달 8일",
    price: "600,000원",
    isIncome: "수입",
    description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
    onClick: "삭제 기능",
  },
];

export default function Add() {
  return (
    <S.Container>
      <BookNav path={`${PATH.BANKING}`} />
      <h3>금융 일정 관리</h3>
      <p>정기적인 지출 / 수입을 저장해두고, 효과적으로 관리해보세요!</p>
      <S.MiddleContainer>
        <S.BankingAdd>
          <BankingAddBox />
          <S.BankingAddList>
            <h4>현재 추가된 목록</h4>
            <S.BankingAddListWrapper>
              {schedueAddList.map(schedule => (
                <S.Box>
                  <S.StyledIcon
                    iconName="wallet"
                    color={COLORS.GREY[300]}
                    size="3rem"
                  />
                  <S.BankingAddInfoWrapper key={schedule.title}>
                    <h5>{schedule.title}</h5>
                    <h6>
                      {schedule.day}/{schedule.price}/{schedule.isIncome}
                    </h6>
                    <p>{schedule.description}</p>
                  </S.BankingAddInfoWrapper>
                  {/* eslint-disable-next-line react/button-has-type */}
                  <S.StyledIcon iconName="cancel" color={COLORS.GREY[300]} />
                </S.Box>
              ))}
            </S.BankingAddListWrapper>
            <Button
              title="금융 일정 수정하기"
              theme="quaternary"
              width="27rem"
            />
          </S.BankingAddList>
        </S.BankingAdd>
        <Schedule />
      </S.MiddleContainer>
    </S.Container>
  );
}
