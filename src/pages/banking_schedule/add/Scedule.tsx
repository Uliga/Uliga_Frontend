import React from "react";
import COLORS from "../../../constants/color";
import * as S from "./index.styles";
import useBankingSchedule from "../../../hooks/useBankingSchedule";

interface Sche {
  name: string;
  notificationDay: number;
  value: number;
  isIncome: boolean;
}
export default function Schedule() {
  const { getSchedules } = useBankingSchedule();
  const { data } = getSchedules();
  console.log("뱉어 씨발아", data);
  if (!data) return null;

  // const schedueList = [
  //   {
  //     title: "넷플릭스 결제",
  //     day: "8일",
  //     bgColor: COLORS.RED.LIGHT,
  //   },
  //   {
  //     title: "교통비",
  //     day: "10일",
  //     bgColor: COLORS.YELLOW,
  //   },
  //   {
  //     title: "신용 카드 값",
  //     day: "10일",
  //     bgColor: COLORS.YELLOW,
  //   },
  //   {
  //     title: "유튜브 뮤직",
  //     day: "12일",
  //     bgColor: COLORS.YELLOW,
  //   },
  //   {
  //     title: "정기 적금",
  //     day: "26일",
  //     bgColor: COLORS.GREEN.DARK,
  //   },
  //   {
  //     title: "월세, 생활비 입금",
  //     day: "28일",
  //     bgColor: COLORS.GREEN.DARK,
  //   },
  // ];
  return (
    <S.ScheduleBoxContainer>
      <h4>
        함민혁님의
        <br />
        다가오는 금융 일정
      </h4>
      <S.ScheduleBoxWrapper>
        {data.schedules.map((sch: Sche) => (
          <S.ScheduleWrapper key={sch.name}>
            <S.StyledBadge
              size={1.15}
              title={`${sch.notificationDay.toString()}일`}
              color="white"
              bgColor={COLORS.GREEN.DARK}
            />
            <div>
              <h5>{sch.name}</h5>
              <p>
                {sch.value}원 / {sch.isIncome ? <>수입</> : <>지출</>}
              </p>
            </div>
          </S.ScheduleWrapper>
        ))}
      </S.ScheduleBoxWrapper>
      <S.ScheduleInfoDesk>
        <S.ScheduleInfo>
          <S.dot1>●</S.dot1>
          <p> 3일 미만의 기간이 남음</p>
        </S.ScheduleInfo>
        <S.ScheduleInfo>
          <S.dot2>●</S.dot2>
          <p> 일주일 미만의 기간이 남음</p>
        </S.ScheduleInfo>
        <S.ScheduleInfo>
          <S.dot3>●</S.dot3>
          <p> 일주일 이상의 기간이 남음</p>
        </S.ScheduleInfo>
      </S.ScheduleInfoDesk>
    </S.ScheduleBoxContainer>
  );
}
