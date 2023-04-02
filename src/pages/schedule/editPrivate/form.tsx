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
    assignments,
    setAssignments,
    mutateUpdateSchedule,
  } = useEditSchedule();

  useEffect(() => {
    setNotificationDate(curSchedule?.info?.notificationDay);
    setName(curSchedule?.info?.name);
    setValue(curSchedule?.info?.value);
    setIsIncome(curSchedule?.info?.isIncome);
    const newAssignment = curSchedule?.assignments.map(item => {
      return {
        memberId: item.id,
        usename: item.username,
        value: item.value,
      };
    });
    setAssignments(newAssignment);
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
            />

            <EditButton
              title="수정 완료"
              onClick={() => {
                const newAssignments: IStringIndex = {};
                assignments.map(item => {
                  newAssignments[item.memberId] = value;
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
