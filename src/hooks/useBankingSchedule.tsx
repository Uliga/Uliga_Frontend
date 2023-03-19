import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { accountBookMember } from "../api/book";
import toastMsg from "../components/Toast";
import useInput from "./useInput";

interface Member {
  id: number;
  nickname: string;
  accountBookAuthority: string;
}
interface Assignments {
  id: number;
  value: number;
}

interface Schedules {
  name: string;
  isIncome: boolean;
  notificationDate: number;
  value: number;
  assignments: Assignments;
}
// interface ScheduleList {
//   schedule: [Schedules];
// }
export default function useBankingSchedule() {
  const { bookId } = useParams();
  const [members, setMembers] = useState<Member[]>([]);
  const [num, setNum] = useInput("");
  const [scheduleName, setScheduleName] = useInput("");
  const [entirePrice, setEntirePrice] = useInput("");
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedIsIncome, setSelectedIsIncome] = useState("");
  const [IsIncome, setIsIncome] = useState<boolean>();
  // const [schedule, setSchedule] = useState<Schedules>();
  const [scheduleList, setScheduleList] = useState<Schedules[]>([]);
  const [price, setPrice] = useState<Assignments[]>([]);
  // const [scheduleList, setScheduleList] = useState<ScheduleList[]>([]);

  const GetMember = async () => {
    try {
      const data = await accountBookMember(Number(bookId));
      console.log(data.members);
      // if (Array.isArray(data)) {
      //   setMembers(data.members); // 배열로 변환
      //   // 받아온 데이터가 배열인지 확인
      // } else {
      //   setMembers(data.members); // 배열로 변환
      // }
      setMembers(data.members); // 배열로 변환

      console.log(members);
      toastMsg("멤버 조회 성공");
    } catch (err) {
      console.log(err);
    }
  };
  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    memberId: number,
  ) => {
    setPrice(prevPrice =>
      // eslint-disable-next-line @typescript-eslint/no-shadow
      prevPrice.map(price =>
        price.id === memberId
          ? { id: memberId, value: parseInt(event.target.value, 10) }
          : price,
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
        assignments: price,
      },
    ]);
  };
  // useEffect(() => {
  //   const initialSchedule = members.map(member => ({
  //     schedule: schedule,
  //   }));
  //   setScheduleList(initialSchedule);
  // }, [members]);
  const schedueAddList = [
    {
      title: "월세, 생활비 입금",
      day: "매달 8일",
      price: "600,000원",
      isIncome: "수입",
      description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
      onClick: "삭제 기능",
    },
    {
      title: "월세, 생활비 입금",
      day: "매달 8일",
      price: "600,000원",
      isIncome: "수입",
      description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
      onClick: "삭제 기능",
    },
    {
      title: "월세, 생활비 입금",
      day: "매달 8일",
      price: "600,000원",
      isIncome: "수입",
      description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
      onClick: "삭제 기능",
    },
    {
      title: "월세, 생활비 입금",
      day: "매달 8일",
      price: "600,000원",
      isIncome: "수입",
      description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
      onClick: "삭제 기능",
    },
    {
      title: "월세, 생활비 입금",
      day: "매달 8일",
      price: "600,000원",
      isIncome: "수입",
      description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
      onClick: "삭제 기능",
    },
    {
      title: "월세, 생활비 입금",
      day: "매달 8일",
      price: "600,000원",
      isIncome: "수입",
      description: "윤채현 100원 ･ 나연경 100,000원 ･ 이시원 500,000원",
      onClick: "삭제 기능",
    },
  ];
  return {
    GetMember,
    members,
    inputSchedule,
    handleIsInComeChange,
    handleOptionChange,
    handlePriceChange,
    // schedule,
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
    schedueAddList,
    scheduleList,
  };
}
