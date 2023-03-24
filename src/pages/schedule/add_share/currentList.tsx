import React from "react";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import Button from "../../../components/Button";
import getMoneyUnit from "../../../utils/money";
import { ScheduleProps } from "../../../hooks/book/useScheduleForm";

export default function CurrentList({
  scheduleList,
  removeSchedules,
  mutateSchedules,
  bookId,
  clearScheduleList,
}: {
  scheduleList: any;
  removeSchedules: any;
  mutateSchedules: any;
  bookId: string | undefined;
  clearScheduleList: any;
}) {
  console.log(scheduleList);
  return (
    <S.BankingAddList>
      <h4>현재 추가된 목록</h4>
      <S.BankingAddListWrapper>
        {scheduleList.map((schedules: ScheduleProps) => (
          <S.Box key={schedules.name}>
            <S.StyledIcon iconName="wallet" color="#acb9df" size="3rem" />
            <S.BankingAddInfoWrapper key={schedules.name}>
              <h5>{schedules.name}</h5>
              <h6>
                매달 {schedules.notificationDate}일 /{" "}
                {getMoneyUnit(Number(schedules.value))}원 /
                {schedules.isIncome ? <> 수입</> : <> 지출</>}
              </h6>
              <div>
                {schedules.assignments.map((ass, index) => (
                  <p key={ass.username}>
                    {ass.username} {getMoneyUnit(Number(ass.value))}
                    {index !== ass.value.toString().length - 1 && " ･ "}
                  </p>
                ))}
              </div>
            </S.BankingAddInfoWrapper>
            <S.CancelIconButton
              iconSize="2rem"
              iconName="cancel"
              color={COLORS.GREY[300]}
              onClick={() => {
                removeSchedules(schedules);
              }}
            />
          </S.Box>
        ))}
      </S.BankingAddListWrapper>
      <Button
        title="금융 일정 추가하기"
        theme="quaternary"
        width="27rem"
        onClick={() => {
          mutateSchedules.mutate({
            id: Number(bookId),
            schedules: scheduleList,
          });
          clearScheduleList();
        }}
      />
    </S.BankingAddList>
  );
}
