import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as S from "./index.styles";
import getMoneyUnit from "../../../utils/money";
import { IScheduleDetail } from "../../../interfaces/schedule";
import useEditSchedule from "../../../hooks/book/useEditSchedule";
import EditShareForm from "./form";
import { deleteScheduleDialogAtom } from "../../../stores/atoms/context";
import allModalAtom from "../../../stores/selectors/context";
import useBook from "../../../hooks/book/useBook";
import { deleteSchedule } from "../../../api/book";
import toastMsg from "../../../components/Toast";
import QUERYKEYS from "../../../constants/querykey";

export default function EditPrivate() {
  const { data, curId, setCurId, curSchedule } = useEditSchedule();
  const [scheduleID, setScheduleID] = useState(0);
  const { bookId } = useParams();
  const { useSchedule } = useBook();
  const { useSelectedBook } = useBook();
  const { data: bookData } = useSelectedBook(bookId);
  const scheduleData = useSchedule();
  const [createDialogOpen, setCreateDialogOpen] = useRecoilState(
    deleteScheduleDialogAtom,
  );
  console.log("금융일정 아이디 찾기", scheduleData.schedules);
  const [, setAllModalAtom] = useRecoilState(allModalAtom);
  console.log("넘겨줄 값", scheduleID);
  // const DeleteSchedule = async () => {
  //   try {
  //     await deleteSchedule({
  //       data: {
  //         id: scheduleID,
  //       },
  //     });
  //     toastMsg("선택하신 금융 일정이 삭제되었습니다.");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const [a, setA] = useState({});
  const queryClient = useQueryClient();
  const mutateDeleteSchedule = useMutation(["deleteSchedule"], deleteSchedule, {
    onSuccess: () => {
      toastMsg("선택하신 금융 일정이 삭제되었습니다.");
      queryClient.invalidateQueries([QUERYKEYS.LOAD_SCHEDULE]);
      queryClient.invalidateQueries([QUERYKEYS.LOAD_SCHEDULE_DETAIL]);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });
  if (!data) return null;

  return (
    <S.Container>
      {createDialogOpen && (
        <S.DeleteDialog
          size={37}
          title={bookData?.info.accountBookName}
          description={`정말 ${bookData?.info.accountBookName}를 삭제하시겠어요?`}
          visible
          cancellable
          onCancel={() => {
            setCreateDialogOpen(false);
          }}
          onConfirm={() => {
            mutateDeleteSchedule.mutate({
              data: {
                id: scheduleID,
              },
            });
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
