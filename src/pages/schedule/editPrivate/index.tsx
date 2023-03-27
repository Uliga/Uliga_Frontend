import React from "react";
import { useRecoilState } from "recoil";
import * as S from "./index.styles";
import getMoneyUnit from "../../../utils/money";
import { IScheduleDetail } from "../../../interfaces/schedule";
import useEditSchedule from "../../../hooks/book/useEditSchedule";
import EditShareForm from "./form";
import { deleteScheduleDialogAtom } from "../../../stores/atoms/context";
import allModalAtom from "../../../stores/selectors/context";

export default function EditPrivate() {
  const { data, curId, setCurId, curSchedule } = useEditSchedule();
  const [createDialogOpen, setCreateDialogOpen] = useRecoilState(
    deleteScheduleDialogAtom,
  );
  const [, setAllModalAtom] = useRecoilState(allModalAtom);
  if (!data) return null;

  return (
    <S.Container>
      {createDialogOpen && (
        <S.DeleteDialog
          size={37}
          title="윤채현님의 가계부 삭제"
          description="정말 윤채현님의 가계부를 삭제하시겠어요?"
          visible
          cancellable
          onCancel={() => {
            setCreateDialogOpen(false);
          }}
        />
      )}
      <EditShareForm curSchedule={curSchedule!} />
      <S.ListWrapper>
        <h3>현재 금융 일정 목록</h3>
        {data.schedules.map((schedule: IScheduleDetail) => (
          <S.Box
            key={schedule.info.id}
            onClick={() => {
              setCurId(schedule.info.id);
            }}
            selected={curId === schedule.info.id}
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
            <S.DeleteButton
              onClick={() => {
                setAllModalAtom(false);
                setCreateDialogOpen(true);
              }}
            >
              삭제하기
            </S.DeleteButton>
          </S.Box>
        ))}
      </S.ListWrapper>
    </S.Container>
  );
}
