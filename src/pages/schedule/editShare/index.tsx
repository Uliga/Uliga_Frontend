import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./index.styles";
import getMoneyUnit from "../../../utils/money";
import { IScheduleDetail } from "../../../interfaces/schedule";
import useEditSchedule from "../../../hooks/book/useEditSchedule";
import EditShareForm from "./form";
import useBook from "../../../hooks/book/useBook";
import Dialog from "../../../components/Dialog";

export default function EditShare() {
  const {
    data,
    curId,
    setCurId,
    curSchedule,
    mutateDeleteSchedule,
    deleteDialogOpen,
    setDeleteDialogOpen,
    setAllModalAtom,
    setSelectedSchedule,
    selectedSchedule,
  } = useEditSchedule();
  const { bookId } = useParams();
  const { useSelectedBook } = useBook();
  const { data: bookData } = useSelectedBook(bookId);
  if (!data) return null;

  return (
    <S.Container>
      {deleteDialogOpen && (
        <Dialog
          size={37}
          title={bookData?.info.accountBookName}
          description={`정말 ${
            selectedSchedule.name.length <= 10
              ? selectedSchedule.name
              : `${selectedSchedule.name}\n`
          }  금융일정을 삭제하시겠어요??`}
          visible
          cancellable
          onCancel={() => {
            setDeleteDialogOpen(false);
          }}
          onConfirm={() => {
            mutateDeleteSchedule.mutate(selectedSchedule.id);
            setDeleteDialogOpen(false);
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
            selected={schedule.info.id === curId}
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
                setSelectedSchedule({
                  id: schedule.info.id,
                  name: schedule.info.name,
                });
                setAllModalAtom(false);
                setDeleteDialogOpen(true);
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
