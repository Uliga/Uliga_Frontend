import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useInput from "../useInput";
import { addSchedule, loadBookMember } from "../../api/book";
import toastMsg from "../../components/Toast";
import QUERYKEYS from "../../constants/querykey";
import { BookMemberProps } from "../../interfaces/book";

export interface AssignmentProps {
  memberId: number;
  username?: string;
  value: number;
}

export interface ScheduleProps {
  assignments: {
    id: number;
    username: string;
    value: number;
  }[];
  isIncome: boolean;
  name: string;
  notificationDate: string;
  value: string;
}
export default function useAddSchedule() {
  const { bookId } = useParams();
  const [notificationDate, onChangetNotificationDate, setNotificationDate] =
    useInput("");
  const [isIncome, setIsIncome] = useState(false);
  const [name, onChangeName, setName] = useInput("");
  const [value, onChangeValue, setValue] = useInput("");
  const [members, setMembers] = useState<BookMemberProps[]>([]);
  const [assignments, setAssignments] = useState<AssignmentProps[]>([]);
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
    setAssignments(prevState =>
      prevState.map(values =>
        values.memberId === memberId
          ? {
              memberId,
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

  useEffect(() => {
    const initialInfo = members.map(member => ({
      username: member.username,
      memberId: member.id,
      value: 0,
    }));
    setAssignments(initialInfo);
  }, [members]);

  const addInputSchedule = () => {
    setScheduleList((prevState: any) => [
      ...prevState,
      {
        name,
        isIncome,
        notificationDate,
        value,
        assignments: assignments.map(item => {
          return {
            id: item.memberId,
            username: item.username,
            value: item.value,
          };
        }),
      },
    ]);

    const initialPrice = members.map(member => ({
      memberId: member.id,
      username: member.username,
      value: 0,
    }));

    setName("");
    setIsIncome(false);
    setNotificationDate("");
    setValue("");
    setAssignments(initialPrice);
  };

  const addInputSchedulePrivate = () => {
    setScheduleList((prevState: any) => [
      ...prevState,
      {
        name,
        isIncome,
        notificationDate,
        value,
        assignments: [
          {
            id: assignments[0].memberId,
            value: +value,
          },
        ],
      },
    ]);
    const initialPrice = members.map(member => ({
      memberId: member.id,
      username: member.username,
      value: 0,
    }));

    setName("");
    setIsIncome(false);
    setNotificationDate("");
    setValue("");
    setAssignments(initialPrice);
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

  const removeSchedules = (selected: ScheduleProps) => {
    setScheduleList(scheduleList.filter(ele => ele !== selected));
  };

  return {
    removeSchedules,
    mutateSchedules,
    bookId,
    clearScheduleList,
    scheduleList,
    members,
    radioList,
    setRadioList,
    inputList,
    handlePriceChange,
    getMember,
    assignments,
    addInputSchedule,
    onChangetNotificationDate,
    handleIsIncome,
    setAssignments,
    notificationDate,
    addInputSchedulePrivate,
  };
}
