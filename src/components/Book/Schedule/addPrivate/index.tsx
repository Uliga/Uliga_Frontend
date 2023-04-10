import React from "react";
import Input from "../../../Input";
import useAddSchedule from "../../../../hooks/book/useAddSchedule";
import CurrentList from "./currentList";
import * as S from "./index.styles";

export default function AddPrivate() {
  const {
    notificationDate,
    onChangetNotificationDate,
    radioList,
    inputList,
    bookId,
    clearScheduleList,
    removeSchedules,
    mutateSchedules,
    scheduleList,
    addInputSchedulePrivate,
  } = useAddSchedule();

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
                onChange={onChangetNotificationDate}
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
                  <label htmlFor={radio.htmlFor}>{radio.label}</label>
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
