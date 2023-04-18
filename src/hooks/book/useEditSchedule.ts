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
import useValidate from "../useValidate";
import REGEX from "../../constants/regex";
import { IStringIndex } from "../../interfaces/book";

interface SelectedSchedule {
  id: number;
  name: string;
}
export default function useEditSchedule() {
  const { bookId } = useParams();
  const { useScheduleDetail } = useBook();
  const data = useScheduleDetail(bookId ? +bookId : 0);

  const [curId, setCurId] = useState<number | undefined>(undefined);
  const [curSchedule, setCurSchedule] = useState<IScheduleDetail>();

  useEffect(() => {
    const selectedData = data?.schedules?.filter(
      (ele: IScheduleDetail) => ele.info.id === curId,
    )[0];
    setCurSchedule(selectedData);
  }, [curId]);
  const [
    notificationDate,
    onChangeNotificationDate,
    setNotificationDate,
    isValidateDate,
  ] = useValidate({ validator: (input: string) => REGEX.DAY.test(input) });

  const [name, onChangeName, setName] = useInput("");
  const [isIncome, setIsIncome] = useState<boolean | undefined>(undefined);
  const [value, onChangeValue, setValue] = useInput(0);
  const [assignments, setAssignments] = useState<AssignmentProps[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useRecoilState(
    deleteScheduleDialogAtom,
  );
  const [, setAllModalAtom] = useRecoilState(allModalAtom);
  const [selectedSchedule, setSelectedSchedule] = useState<SelectedSchedule>({
    id: 0,
    name: "",
  });

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
    memberName: string | undefined,
    memberId: number,
  ) => {
    setAssignments(prevState =>
      prevState.map(values =>
        values.memberId === memberId
          ? {
              memberId,
              username: memberName,
              value: event.target.value ? parseInt(event.target.value, 10) : 0,
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
      toastMsg("선택하신 금융 일정이 삭제되었습니다 👏");
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

  const onSubmitEditForm = (scheduleId: number) => {
    if (
      !isValidateDate ||
      notificationDate === "" ||
      !name ||
      isIncome === undefined
    ) {
      toastMsg(
        "잘못된 입력값이 들어가있습니다. 입력 형식을 다시 확인해주세요!",
      );
    } else if (
      !assignments.some(ele => REGEX.INTEGER.test(String(ele.value))) &&
      !assignments.every(ele => ele.value === 0 || Number.isNaN(ele.value))
    ) {
      toastMsg("금액을 다시 확인해주세요!");
    } else if (
      data?.schedules?.some(
        (ele: IScheduleDetail) =>
          ele.info.name === name && ele.info.id !== scheduleId,
      )
    ) {
      toastMsg("이미 추가된 금융 일정 입니다.");
    } else {
      const newAssignments: IStringIndex = {};
      assignments.map(item => {
        newAssignments[item.memberId] = value !== 0 ? item.value : -1;
        return newAssignments;
      });
      const newSchedule = {
        id: scheduleId,
        name,
        value: value !== 0 ? value : -1,
        notificationDate,
        isIncome,
        assignments: newAssignments,
      };
      mutateUpdateSchedule.mutate(newSchedule);
    }
  };

  const onSubmitEditFormPrivate = (scheduleId: number) => {
    if (
      !isValidateDate ||
      notificationDate === "" ||
      !name ||
      isIncome === undefined
    ) {
      toastMsg(
        "잘못된 입력값이 들어가있습니다. 입력 형식을 다시 확인해주세요!",
      );
    } else if (!REGEX.INTEGER.test(String(value)) && +value !== 0) {
      toastMsg("금액을 다시 확인해주세요!");
    } else if (
      data?.schedules?.some(
        (ele: IScheduleDetail) =>
          ele.info.name === name && ele.info.id !== scheduleId,
      )
    ) {
      toastMsg("이미 추가된 금융 일정 입니다.");
    } else {
      const newAssignments: IStringIndex = {};
      assignments.map(item => {
        newAssignments[item.memberId] = +value !== 0 ? item.value : -1;
        return newAssignments;
      });
      const newSchedule = {
        id: scheduleId,
        name,
        value: +value !== 0 ? +value : -1,
        notificationDate,
        isIncome,
        assignments: newAssignments,
      };
      mutateUpdateSchedule.mutate(newSchedule);
    }
  };

  useEffect(() => {
    if (assignments) {
      setValue(
        assignments.reduce((acc, cur) => {
          return acc + Number(cur.value ? cur.value : 0);
        }, 0),
      );
    }
  }, [assignments]);

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
    deleteDialogOpen,
    setDeleteDialogOpen,
    setAllModalAtom,
    setSelectedSchedule,
    selectedSchedule,
    onSubmitEditForm,
    onSubmitEditFormPrivate,
  };
}
