import React from "react";
import Input from "../../../Input";
import useAddSchedule from "../../../../hooks/book/useAddSchedule";
import CurrentList from "./currentList";
import * as S from "./index.styles";

export default function AddShare() {
  const {
    notificationDate,
    onChangetNotificationDate,
    radioList,
    inputList,
    members,
    bookId,
    clearScheduleList,
    removeSchedules,
    mutateSchedules,
    assignments,
    scheduleList,
    addInputSchedule,
    handlePriceChange,
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
          <S.AddMemberPartitionForm>
            <div>
              <h4>구성원 할당하기</h4>
              <p>* 설정하지 않으면 자신에게 모든 금액이 할당됩니다.</p>
              <p>* 구성원을 할당하게 되면 알림 메시지가 전송됩니다.</p>
            </div>
            <div>
              {members.map(member => (
                <div key={member.id}>
                  <S.Division>
                    <S.Name>{member.username}</S.Name>
                    <Input
                      value={
                        assignments.find(
                          priceItem => priceItem.memberId === member.id,
                        )?.value || ""
                      }
                      type="number"
                      labelHidden
                      size={12}
                      onChange={event => {
                        handlePriceChange(event, member.username, member.id);
                      }}
                    />
                    원
                  </S.Division>
                </div>
              ))}
            </div>
          </S.AddMemberPartitionForm>
          <S.AddButton
            iconName="plus"
            theme="basic"
            onClick={addInputSchedule}
          />
        </S.Background>
      </S.Form>
      <CurrentList
        scheduleList={scheduleList}
        removeSchedules={removeSchedules}
        mutateSchedules={mutateSchedules}
        bookId={bookId}
        clearScheduleList={clearScheduleList}
      />
    </S.Container>
  );
}
