import React from "react";
import * as S from "./index.styles";
import { IScheduleDetail } from "../../../interfaces/schedule";

export default function EditShareForm({
  curSchedule,
}: {
  curSchedule: IScheduleDetail;
}) {
  console.log(curSchedule);
  return (
    <S.Form>
      <S.Background>
        {curSchedule?.info?.notificationDay}
        {curSchedule?.info?.name}
      </S.Background>
    </S.Form>
  );
}
