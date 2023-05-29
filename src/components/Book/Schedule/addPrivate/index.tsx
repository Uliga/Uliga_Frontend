import React from "react";
import Input from "../../../Input";
import useAddSchedule from "../../../../hooks/book/useAddSchedule";
import CurrentList from "./currentList";
import * as S from "./index.styles";
import { ISchedule } from "../../../../interfaces/schedule";

export default function AddPrivate({ schedules }: { schedules: ISchedule[] }) {
  const {
    notificationDate,
    onChangeNotificationDate,
    radioList,
    inputList,
    bookId,
    clearScheduleList,
    removeSchedules,
    mutateSchedules,
    scheduleList,
    addInputSchedulePrivate,
  } = useAddSchedule({ schedules });

  return (
    <S.Container>
      <S.Form>
        <S.Background>
          <div>
            <S.InputLabel> 날짜</S.InputLabel>
            <S.InputWrapper>
              매달
              <Input
                labelHidden
                size={7}
                value={notificationDate}
                onChange={onChangeNotificationDate}
                type="number"
              />
              일
            </S.InputWrapper>
          </div>
          <S.RadioWrapper>
            <S.RadioLabel>{radioList.label}</S.RadioLabel>
            <div>
              {radioList.radios.map((radio: any) => (
                <div className={radio.className} key={radio.value}>
                  <input
                    id={radio.id}
                    type={radio.type}
                    name={radio.name}
                    value={radio.value}
                    onChange={radio.onChange}
                  />
                  <label data-cy="radio-label" htmlFor={radio.htmlFor}>
                    {radio.label}
                  </label>
                </div>
              ))}
            </div>
          </S.RadioWrapper>
          {inputList.map(input => (
            <Input
              label={input.label}
              value={input.value}
              onChange={input.onChange}
              size={input.size}
              type={input.type}
              message={input.message}
              key={input.label}
            />
          ))}
          <S.AddButton
            dataCy="schedule-add-button"
            iconName="plus"
            theme="basic"
            onClick={addInputSchedulePrivate}
          />
        </S.Background>
      </S.Form>
      <CurrentList
        scheduleList={scheduleList}
        removeSchedules={removeSchedules}
      />
      <S.AddSceduleButton
        dataCy="schedule-submit-button"
        title="금융 일정 추가하기"
        theme="quaternary"
        width="25rem"
        onClick={() => {
          mutateSchedules.mutate({
            id: Number(bookId),
            schedules: scheduleList,
          });
          clearScheduleList();
        }}
      />
    </S.Container>
  );
}
