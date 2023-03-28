import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import useBook from "./useBook";
import { IScheduleDetail } from "../../interfaces/schedule";
import useInput from "../useInput";
import { AssignmentProps } from "./useAddSchedule";
import { deleteSchedule, updateSchedule } from "../../api/book";
import toastMsg from "../../components/Toast";
import QUERYKEYS from "../../constants/querykey";
import { deleteScheduleDialogAtom } from "../../stores/atoms/context";
import allModalAtom from "../../stores/selectors/context";

export default function useEditSchedule() {
  const { bookId } = useParams();
  const { useScheduleDetail } = useBook();
  const data = useScheduleDetail(bookId ? +bookId : 0);

  const [curId, setCurId] = useState<number | undefined>(undefined);
  const [curSchedule, setCurSchedule] = useState<IScheduleDetail>();
  // data?.schedules[0],

  useEffect(() => {
    const selectedData = data?.schedules?.filter(
      (ele: IScheduleDetail) => ele.info.id === curId,
    )[0];
    setCurSchedule(selectedData);
  }, [curId]);

  const [notificationDate, onChangeNotificationDate, setNotificationDate] =
    useInput("");
  const [name, onChangeName, setName] = useInput("");
  const [isIncome, setIsIncome] = useState<boolean | undefined>(undefined);
  const [value, onChangeValue, setValue] = useInput("");
  const [assignments, setAssignments] = useState<AssignmentProps[]>([]);
  const [scheduleID, setScheduleID] = useState(0);
  const [createDialogOpen, setCreateDialogOpen] = useRecoilState(
    deleteScheduleDialogAtom,
  );
  const [, setAllModalAtom] = useRecoilState(allModalAtom);
  const [scheduleName, setScheduleName] = useState("");

  const handleIsIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "income") {
      setIsIncome(true);
    }
    if (e.target.value === "record") {
      setIsIncome(false);
    }
  };
  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    memberName: string,
    memberId: number,
  ) => {
    setAssignments(prevState =>
      prevState.map(values =>
        values.username === memberName
          ? {
              id: memberId,
              username: memberName,
              value: parseInt(event.target.value, 10),
            }
          : values,
      ),
    );
  };

  const queryClient = useQueryClient();
  const mutateUpdateSchedule = useMutation(["editSchedule"], updateSchedule, {
    onSuccess: () => {
      toastMsg("금융 일정 수정 완료 👏");
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
  return {
    data,
    setCurId,
    curId,
    curSchedule,
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
    mutateDeleteSchedule,
    setScheduleID,
    scheduleID,
    createDialogOpen,
    setCreateDialogOpen,
    setAllModalAtom,
    setScheduleName,
    scheduleName,
  };
}
