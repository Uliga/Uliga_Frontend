import React from "react";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import Button from "../../../components/Button";
import { CheckPriceProps, ScheduleProps } from "../../../hooks/useSchedule";

export default function CurrentList({
  price,
  scheduleList,
  removeSchedules,
  mutateSchedules,
  bookId,
  clearScheduleList,
}: {
  price: CheckPriceProps[];
  scheduleList: any;
  removeSchedules: any;
  mutateSchedules: any;
  bookId: string | undefined;
  clearScheduleList: any;
}) {
  return (
    <S.BankingAddList>
      <h4>현재 추가된 목록</h4>
      <S.BankingAddListWrapper>
        {scheduleList.map((schedules: ScheduleProps) => (
          <S.Box>
            <S.StyledIcon iconName="wallet" color="#acb9df" size="3rem" />
            <S.BankingAddInfoWrapper key={schedules.name}>
              <h5>{schedules.name}</h5>
              <h6>
                매달 {schedules.notificationDate}일 / {schedules.value}원 /
                {schedules.isIncome ? <> 수입</> : <> 지출</>}
              </h6>
              <div>
                {price.map((ass, index) => (
                  <p key={ass.username}>
                    {ass.username} {ass.value}
                    {index !== price.length - 1 && " ･ "}
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
