import React from "react";
import * as S from "./index.styles";
import getMoneyUnit from "../../../utils/money";
import { IScheduleDetail } from "../../../interfaces/schedule";
import useEditShared from "../../../hooks/book/useEditShared";
import EditShareForm from "./form";

export default function EditShare() {
  const { data, setCurId, curSchedule } = useEditShared();

  if (!data) return null;

  return (
    <S.Container>
      <EditShareForm curSchedule={curSchedule!} />
      <S.ListWrapper>
        {data.schedules.map((schedule: IScheduleDetail) => (
          <S.Box
            key={schedule.info.id}
            onClick={() => {
              setCurId(schedule.info.id);
            }}
          >
            <S.Badge>{schedule.info.notificationDay}일</S.Badge>
            <div>
              <h5>{schedule.info.name}</h5>
              <h6>{`${getMoneyUnit(schedule.info.value)} / ${
                schedule.info.isIncome ? "수입" : "지출"
              }`}</h6>
              {schedule.assignments.map(item => (
                <S.Users key={item.username}>
                  {item.username} {getMoneyUnit(Number(item.value))}
                </S.Users>
              ))}
            </div>
            <S.DeleteButton>삭제하기</S.DeleteButton>
          </S.Box>
        ))}
      </S.ListWrapper>
    </S.Container>
  );
}
