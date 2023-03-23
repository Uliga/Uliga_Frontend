import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useInput from "../useInput";
import { addSchedule, loadBookMember } from "../../api/book";
import toastMsg from "../../components/Toast";
import QUERYKEYS from "../../constants/querykey";

export default function useScheduleForm() {
  interface MemberProps {
    id: number;
    username: string;
    value: number;
  }

  interface CheckPriceProps {
    username: string;
    value: number;
  }

  const { bookId } = useParams();
  const [name, onChangeName] = useInput("");
  const [value, onChangeValue] = useInput("");
  const [members, setMembers] = useState<MemberProps[]>([]);
  const [price, setPrice] = useState<CheckPriceProps[]>([]);
  const [assignments, setAssignments] = useState<MemberProps[]>([]);
  const [isIncome, setIsIncome] = useState(false);
  const [notificationDate, onChangetNotificationDate] = useInput(undefined);
  const [scheduleList, setScheduleList] = useState<ScheduleProps[]>([]);

  const handleIsIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "income") {
      setIsIncome(true);
    }
    if (e.target.value === "record") {
      setIsIncome(false);
    }
  };

  const [radioList, setRadioList] = useState({
    label: "분류",
    radios: [
      {
        className: "form_radio_btn radio",
        id: "record",
        type: "radio",
        name: "isIncome",
        value: "record",
        htmlFor: "record",
        label: "지출",
        onChange: handleIsIncome,
      },
      {
        className: "form_radio_btn radio",
        id: "income",
        type: "radio",
        name: "isIncome",
        value: "income",
        htmlFor: "income",
        label: "수입",
        onChange: handleIsIncome,
      },
    ],
  });

  const INPUT_SIZE = 21;
  const inputList = [
    {
      label: "일정 이름",
      type: "text",
      value: name,
      onChange: onChangeName,
      size: INPUT_SIZE,
      message: "",
    },
    {
      label: "금액",
      type: "number",
      value,
      onChange: onChangeValue,
      size: INPUT_SIZE,
      message: `* 입력하지 않으면 '변동'이라는 값으로 들어갑니다.`,
    },
  ];

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    memberName: string,
    memberId: number,
  ) => {
    setPrice(prevState =>
      prevState.map(values =>
        values.username === memberName
          ? { username: memberName, value: parseInt(event.target.value, 10) }
          : values,
      ),
    );
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
  const getMember = async () => {
    try {
      const data = await loadBookMember(Number(bookId));
      setMembers(data.members);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMember();
  }, []);

  interface ScheduleProps {
    name: string;
    isIncome: boolean;
    notificationDate: number | undefined;
    value: number;
    assignments: any;
  }
  const addInputSchedule = () => {
    setScheduleList((prevState: ScheduleProps[]) => [
      ...prevState,
      {
        name,
        isIncome,
        notificationDate,
        value,
        assignments,
      },
    ]);
  };

  const clearScheduleList = () => {
    setScheduleList([]);
  };

  const queryClient = useQueryClient();
  const mutateSchedules = useMutation(["addSchedule"], addSchedule, {
    onSuccess: () => {
      toastMsg("작성하신 금융 일정이 추가되었습니다.");
      queryClient.invalidateQueries([QUERYKEYS.LOAD_SCHEDULE]);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  interface AssignmentTypes {
    id: number;
    value: number;
  }
  interface AssignmentProps {
    name: string;
    isIncome: boolean;
    notificationDate: number | undefined;
    value: number;
    assignments: AssignmentTypes;
  }

  const removeSchedules = (selected: AssignmentProps) => {
    setScheduleList(
      scheduleList.filter((ele: AssignmentProps) => ele !== selected),
    );
  };

  return {
    removeSchedules,
    mutateSchedules,
    bookId,
    clearScheduleList,
    scheduleList,
    members,
    price,
    radioList,
    setRadioList,
    inputList,
    handlePriceChange,
    getMember,
    assignments,
    addInputSchedule,
    onChangetNotificationDate,
    handleIsIncome,
    setPrice,
    setAssignments,
    notificationDate,
  };
}
