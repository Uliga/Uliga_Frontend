import React from "react";
import COLORS from "../../../constants/color";
import Button from "../../Button";
import * as S from "./index.styles";

export default function Schedule() {
  const schedueList = [
    {
      title: "넷플릭스 결제",
      day: "8일",
      bgColor: COLORS.RED.LIGHT,
    },
    {
      title: "교통비",
      day: "10일",
      bgColor: COLORS.YELLOW,
    },
    {
      title: "신용 카드 값",
      day: "10일",
      bgColor: COLORS.YELLOW,
    },
    {
      title: "유튜브 뮤직",
      day: "12일",
      bgColor: COLORS.YELLOW,
    },
    {
      title: "정기 적금",
      day: "26일",
      bgColor: COLORS.GREEN.DARK,
    },
    {
      title: "월세, 생활비 입금",
      day: "28일",
      bgColor: COLORS.GREEN.DARK,
    },
  ];
  return (
    <S.Container>
      <S.Wrapper>
        <h4>📅 다가오는 금융 일정</h4>
        {schedueList.map(schedule => (
          <S.ScheduleWrapper key={schedule.title}>
            <S.StyledBadge
              size={1.15}
              title={schedule.day}
              color="white"
              bgColor={schedule.bgColor}
            />
            <h5>{schedule.title}</h5>
          </S.ScheduleWrapper>
        ))}
        <Button title="금융 일정 수정하기" theme="quaternary" width="100%" />
      </S.Wrapper>
    </S.Container>
  );
}
