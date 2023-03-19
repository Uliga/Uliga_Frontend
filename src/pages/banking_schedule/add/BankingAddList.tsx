import React from "react";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import Button from "../../../components/Button";

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
interface Assignments {
  id: number;
  value: number;
}
interface Schedules {
  name: string;
  isIncome: boolean;
  notificationDate: number;
  value: number;
  assignments: Assignments;
}
interface Props {
  schedule: Schedules;
}
export default function BankingAddList(props: Props) {
  return (
    <S.BankingAddList>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <h4>현재 추가된 목록{props.schedule.name}</h4>
      <S.BankingAddListWrapper>
        {schedueAddList.map(schedules => (
          <S.Box>
            <S.StyledIcon
              iconName="wallet"
              color={COLORS.GREY[300]}
              size="3rem"
            />
            <S.BankingAddInfoWrapper key={schedules.title}>
              <h5>{schedules.title}</h5>
              <h6>
                {schedules.day}/{schedules.price}/{schedules.isIncome}
              </h6>
              <p>{schedules.description}</p>
            </S.BankingAddInfoWrapper>
            {/* eslint-disable-next-line react/button-has-type */}
            <S.StyledIcon iconName="cancel" color={COLORS.GREY[300]} />
          </S.Box>
        ))}
      </S.BankingAddListWrapper>
      <Button title="금융 일정 수정하기" theme="quaternary" width="27rem" />
    </S.BankingAddList>
  );
}
