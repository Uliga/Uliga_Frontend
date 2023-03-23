import React from "react";
import COLORS from "../../constants/color";
import * as S from "./index.styles";
import useSchedule from "../../hooks/useSchedule";

interface ScheduleProps {
  name: string;
  notificationDay: number;
  value: number;
  isIncome: boolean;
}

export default function ScheduleList() {
  const { getSchedules } = useSchedule();
  const { data } = getSchedules();
  if (!data) return null;
  const infoList = [
    {
      color: COLORS.RED.LIGHT,
      title: "3일 미만의 기간이 남음",
    },
    {
      color: COLORS.YELLOW,
      title: "일주일 미만의 기간이 남음",
    },
    {
      color: COLORS.GREEN.DARK,
      title: "일주일 이상의 기간이 남음",
    },
  ];
  return (
    <S.Container>
      <h5>다가오는 금융 일정</h5>
      <S.Wrapper>
        {data.schedules.map((schedule: ScheduleProps) => (
          <S.ScheduleWrapper key={schedule.name}>
            <S.StyledBadge
              size={1.15}
              title={`${schedule.notificationDay.toString()}일`}
              color="white"
              bgColor={
                // eslint-disable-next-line no-nested-ternary
                schedule.notificationDay === 15
                  ? COLORS.RED.LIGHT
                  : schedule.notificationDay === 16
                  ? COLORS.YELLOW
                  : COLORS.GREEN.DARK
              }
            />
            <div>
              <h6>{schedule.name}</h6>
              <p>
                {schedule.value}원 / {schedule.isIncome ? <>수입</> : <>지출</>}
              </p>
            </div>
          </S.ScheduleWrapper>
        ))}
      </S.Wrapper>
      <S.ScheduleInfoDesk>
        {infoList.map(info => (
          <div>
            <S.dot color={info.color}>●</S.dot>일<span> {info.title}</span>
          </div>
        ))}
      </S.ScheduleInfoDesk>
    </S.Container>
  );
}
