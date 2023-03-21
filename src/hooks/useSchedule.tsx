import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loadBookMember, addSchedule, loadSchedule } from "../api/book";
import toastMsg from "../components/Toast";
import useInput from "./useInput";
import QUERYKEYS from "../constants/querykey";

export interface MemberProps {
  id: number;
  username: string;
  value: number;
}

export interface CheckPriceProps {
  username: string;
  value: number;
}

export interface ScheduleProps {
  name: string;
  isIncome: boolean;
  notificationDate: number;
  value: number;
  assignments: MemberProps;
}

export default function useSchedule() {
  const { bookId } = useParams();
  const [members, setMembers] = useState<MemberProps[]>([]);
  const [price, setPrice] = useState<CheckPriceProps[]>([]);

  const [num, setNum] = useInput("");
  const [scheduleName, setScheduleName] = useInput("");
  const [entirePrice, setEntirePrice] = useInput("");
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedIsIncome, setSelectedIsIncome] = useState("");
  const [IsIncome, setIsIncome] = useState<boolean>();
  const [scheduleList, setScheduleList] = useState<ScheduleProps[]>([]);
  const [assignments, setAssignments] = useState<MemberProps[]>([]);

  const queryClient = useQueryClient();
  const clearScheduleList = () => {
    setScheduleList([]);
  };
  const getMember = async () => {
    try {
      const data = await loadBookMember(Number(bookId));
      setMembers(data.members);
      toastMsg("멤버 조회 성공");
    } catch (err) {
      console.log(err);
    }
  };
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
  const getSchedules = () => {
    const { isLoading, error, data } = useQuery(
      [QUERYKEYS.LOAD_SCHEDULE],
      loadSchedule,
    );
    return { isLoading, error, data };
  };
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
  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<number> };
  }) => {
    setSelectedOption(event.target.value);
  };

  const handleIsInComeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedIsIncome(event.target.value);
    if (event.target.value === "spend") {
      setIsIncome(false);
    } else {
      setIsIncome(true);
    }
  };
  const inputSchedule = () => {
    // @ts-ignore
    setScheduleList(prevState => [
      ...prevState,
      {
        name: scheduleName,
        isIncome: IsIncome,
        notificationDate: selectedOption,
        value: entirePrice,
        assignments,
      },
    ]);
  };
  return {
    getMember,
    members,
    inputSchedule,
    handleIsInComeChange,
    handleOptionChange,
    handlePriceChange,
    num,
    setNum,
    setScheduleName,
    setEntirePrice,
    selectedIsIncome,
    setSelectedIsIncome,
    selectedOption,
    setSelectedOption,
    setPrice,
    scheduleName,
    price,
    entirePrice,
    scheduleList,
    mutateSchedules,
    getSchedules,
    setMembers,
    setScheduleList,
    assignments,
    setAssignments,
    clearScheduleList,
  };
}
