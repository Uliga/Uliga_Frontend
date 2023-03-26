import React, { useEffect } from "react";
import * as S from "./index.styles";
import Input from "../../../components/Input";
import useEditSchedule from "../../../hooks/book/useEditSchedule";
import { IScheduleDetail } from "../../../interfaces/schedule";
import { EditButton } from "./index.styles";
import { IStringIndex } from "../../../interfaces/book";

export default function EditShareForm({
  curSchedule,
}: {
  curSchedule: IScheduleDetail;
}) {
  const {
    notificationDate,
    onChangeNotificationDate,
    setNotificationDate,
    name,
    onChangeName,
    setName,
    value,
    onChangeValue,
    setValue,
    isIncome,
    setIsIncome,
    handleIsIncome,
    handlePriceChange,
    assignments,
    setAssignments,
    mutateUpdateSchedule,
  } = useEditSchedule();

  useEffect(() => {
    setNotificationDate(curSchedule?.info?.notificationDay);
    setName(curSchedule?.info?.name);
    setValue(curSchedule?.info?.value);
    setIsIncome(curSchedule?.info?.isIncome);
    setAssignments(curSchedule?.assignments);
  }, [curSchedule]);

  return (
    <S.Form>
      <S.Background>
        {curSchedule ? (
          <>
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
              <S.RadioLabel>분류</S.RadioLabel>
              <div>
                <div className="form_radio_btn radio">
                  <input
                    id="record"
                    type="radio"
                    name="isIncome"
                    value="record"
                    onChange={handleIsIncome}
                    checked={isIncome !== undefined && !isIncome}
                  />
                  <label htmlFor="record">지출</label>
                </div>
                <div className="form_radio_btn radio">
                  <input
                    id="income"
                    type="radio"
                    name="isIncome"
                    value="income"
                    onChange={handleIsIncome}
                    checked={isIncome !== undefined && isIncome}
                  />
                  <label htmlFor="income">수입</label>
                </div>
              </div>
            </S.RadioWrapper>
            <Input
              label="일정 이름"
              type="text"
              value={name}
              onChange={onChangeName}
              size={21}
            />
            <Input
              label="금액"
              type="number"
              value={value}
              onChange={onChangeValue}
              size={21}
              message={`* 입력하지 않으면 '변동'이라는 값으로 들어갑니다.`}
            />
            <S.AddMemberPartitionForm>
              <div>
                <h4>구성원 할당하기</h4>
                <p>* 설정하지 않으면 자신에게 모든 금액이 할당됩니다.</p>
                <p>* 구성원을 할당하게 되면 알림 메시지가 전송됩니다.</p>
              </div>
              <div>
                {assignments?.map(member => (
                  <div key={member.id}>
                    <S.Division>
                      <S.Name>{member.username}</S.Name>
                      <Input
                        // @ts-ignore
                        value={member.value}
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
            <EditButton
              title="수정 완료"
              onClick={() => {
                const newAssignments: IStringIndex = {};
                assignments.map(item => {
                  newAssignments[item.id] = item.value;
                  return newAssignments;
                });
                const newSchedule = {
                  id: curSchedule?.info?.id,
                  name,
                  value,
                  notificationDate,
                  isIncome,
                  assignments: newAssignments,
                };
                mutateUpdateSchedule.mutate(newSchedule);
              }}
            />
          </>
        ) : (
          <S.Please>수정하고자 하는 금융일정을 선택해주세요! 💰</S.Please>
        )}
      </S.Background>
    </S.Form>
  );
}
