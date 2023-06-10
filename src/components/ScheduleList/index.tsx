import React from "react";
import COLORS from "../../constants/color";
import * as S from "./index.styles";
import { ISchedule } from "../../interfaces/schedule";
import { getRemainDate } from "../../utils/date";
import getMoneyUnit from "../../utils/money";

export default function ScheduleList({
  schedules,
}: {
  schedules: ISchedule[];
}) {
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
      <h5>다가오는 금융 일정 📆</h5>
      <S.Wrapper>
        {schedules.map((schedule: ISchedule) => (
          <S.ScheduleWrapper key={schedule.name}>
            <S.StyledBadge
              size={1.15}
              title={`${schedule.notificationDay}일`}
              color="white"
              bgColor={
                // eslint-disable-next-line no-nested-ternary
                getRemainDate(schedule.notificationDay) < 3
                  ? COLORS.RED.LIGHT
                  : getRemainDate(schedule.notificationDay) < 7
                  ? COLORS.YELLOW
                  : COLORS.GREEN.DARK
              }
            />
            <div>
              <h6>{schedule.name}</h6>
              <p>
                {schedule.value !== -1
                  ? `${getMoneyUnit(schedule.value)}원`
                  : "변동"}{" "}
                / {schedule.isIncome ? <>수입</> : <>지출</>}
              </p>
            </div>
          </S.ScheduleWrapper>
        ))}
      </S.Wrapper>
      <S.ScheduleInfoDesk>
        {infoList.map(info => (
          <div key={info.title}>
            <S.dot color={info.color}>●</S.dot>
            <span> {info.title}</span>
          </div>
        ))}
      </S.ScheduleInfoDesk>
    </S.Container>
  );
}
