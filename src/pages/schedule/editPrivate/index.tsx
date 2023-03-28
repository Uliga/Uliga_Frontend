import React from "react";
import { useParams } from "react-router-dom";
// import { text } from "@storybook/addon-knobs";
import * as S from "./index.styles";
import getMoneyUnit from "../../../utils/money";
import { IScheduleDetail } from "../../../interfaces/schedule";
import useEditSchedule from "../../../hooks/book/useEditSchedule";
import EditShareForm from "./form";
import useBook from "../../../hooks/book/useBook";
import Dialog from "../../../components/Dialog";

export default function EditPrivate() {
  const {
    data,
    curId,
    setCurId,
    curSchedule,
    mutateDeleteSchedule,
    scheduleID,
    setScheduleID,
    createDialogOpen,
    setCreateDialogOpen,
    setAllModalAtom,
    setScheduleName,
    scheduleName,
  } = useEditSchedule();
  const { bookId } = useParams();
  const { useSelectedBook } = useBook();
  const { data: bookData } = useSelectedBook(bookId);
  if (!data) return null;

  return (
    <S.Container>
      {createDialogOpen && (
        <Dialog
          size={37}
          title={bookData?.info.accountBookName}
          description={`정말 ${
            scheduleName.length <= 10 ? scheduleName : `${scheduleName}\n`
          }  금융일정을 삭제하시겠어요?`}
          visible
          cancellable
          onCancel={() => {
            setCreateDialogOpen(false);
          }}
          onConfirm={() => {
            mutateDeleteSchedule.mutate(scheduleID);
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
                setScheduleID(schedule.info.id);
                setScheduleName(schedule.info.name);
                console.log("스케쥴이름", schedule.info.name);
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
