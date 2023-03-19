import React, { useEffect } from "react";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import Input from "../../../components/Input";
import useBankingSchedule from "../../../hooks/useBankingSchedule";
import Button from "../../../components/Button";
// import useInput from "../../../hooks/useInput";

// interface Assignments {
//   id: number;
//   value: number;
// }

// interface Schedules {
//   name: string;
//   isIncome: boolean;
//   notificationDate: number;
//   value: number;
//   assignments: Assignments;
// }

export default function Add() {
  // const [num, setNum] = useInput("");
  // const [scheduleName, setScheduleName] = useInput("");
  // const [entirePrice, setEntirePrice] = useInput("");
  // const [selectedOption, setSelectedOption] = useState(0);
  // const [selectedIsIncome, setSelectedIsIncome] = useState("");
  // const [IsIncome, setIsIncome] = useState<boolean>();
  // const [schedule, setSchedule] = useState<Schedules>();
  const {
    GetMember,
    members,
    setPrice,
    // schedule,
    selectedIsIncome,
    setSelectedIsIncome,
    selectedOption,
    setSelectedOption,
    num,
    setNum,
    setScheduleName,
    handleIsInComeChange,
    inputSchedule,
    scheduleName,
    price,
    handlePriceChange,
    entirePrice,
    setEntirePrice,
    handleOptionChange,
    scheduleList,
    AddSchedules,
  } = useBankingSchedule();
  console.log("날짜", selectedOption);
  console.log("분류", selectedIsIncome);
  console.log("일정이름", scheduleName);
  console.log("금액", entirePrice);
  console.log("구성원 할당하기", entirePrice);

  // const [price, setPrice] = useState<Assignments[]>([]);

  useEffect(() => {
    const initialPrice = members.map(member => ({ id: member.id, value: 0 }));
    setPrice(initialPrice);
  }, [members]);

  // const handlePriceChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   memberId: number,
  // ) => {
  //   setPrice(prevPrice =>
  //     // eslint-disable-next-line @typescript-eslint/no-shadow
  //     prevPrice.map(price =>
  //       price.id === memberId
  //         ? { id: memberId, value: parseInt(event.target.value, 10) }
  //         : price,
  //     ),
  //   );
  // };
  useEffect(() => {
    GetMember();
  }, []);
  // const handleOptionChange = (event: {
  //   target: { value: React.SetStateAction<number> };
  // }) => {
  //   setSelectedOption(event.target.value);
  // };

  // const handleIsInComeChange = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setSelectedIsIncome(event.target.value);
  //   if (event.target.value === "spend") {
  //     setIsIncome(false);
  //   } else {
  //     setIsIncome(true);
  //   }
  // };
  // const inputSchedule = () => {
  //   // @ts-ignore
  //   setSchedule(prevState => {
  //     return {
  //       ...prevState,
  //       name: scheduleName,
  //       isIncome: IsIncome,
  //       notificationDate: selectedOption,
  //       value: entirePrice,
  //       assignments: price,
  //     };
  //   });
  // };
  // console.log("제발 한번에 가자", schedule);
  console.log("제발", scheduleList);
  return (
    <S.BankingAdd>
      <S.BankingAddForm>
        <S.BankingAddFormBox>
          <S.AddFormLeft>
            <S.AddDateForm>
              <h4>날짜</h4>
              <S.Option>
                <input
                  type="radio"
                  name="test"
                  value={1}
                  checked={selectedOption === 1}
                  // @ts-ignore
                  onChange={handleOptionChange}
                />
                <S.Label
                  style={{
                    color:
                      selectedOption === 1 ? COLORS.BLUE : COLORS.GREY[300],
                  }}
                  onClick={() => setSelectedOption(1)}
                >
                  매달 말일
                </S.Label>
              </S.Option>
              <S.Option>
                <input
                  type="radio"
                  name="test"
                  value={20}
                  checked={selectedOption === 20}
                  // @ts-ignore
                  onChange={handleOptionChange}
                />
                <S.Label
                  style={{
                    color:
                      selectedOption === 20 ? COLORS.BLUE : COLORS.GREY[300],
                  }}
                  onClick={() => setSelectedOption(20)}
                >
                  매달 1일
                </S.Label>
              </S.Option>
              <S.Option3>
                <input
                  type="radio"
                  name="test"
                  value={num}
                  checked={selectedOption === num}
                  // @ts-ignore
                  onChange={handleOptionChange}
                />
                <S.Label
                  style={{
                    color:
                      selectedOption === num ? COLORS.BLUE : COLORS.GREY[300],
                  }}
                  onClick={() => setSelectedOption(num)}
                >
                  <p>매달</p>
                  <S.OptionInput type="number" value={num} onChange={setNum} />
                  <p>일</p>
                </S.Label>
              </S.Option3>
            </S.AddDateForm>
            <S.AddCategoryForm>
              <h4>분류</h4>
              <S.Option>
                <S.Option>
                  <input
                    type="radio"
                    value="spend"
                    checked={selectedIsIncome === "spend"}
                    onChange={handleIsInComeChange}
                  />
                  <S.Label
                    style={{
                      color:
                        selectedIsIncome === "spend"
                          ? COLORS.BLUE
                          : COLORS.GREY[300],
                    }}
                    onClick={() => setSelectedIsIncome("spend")}
                  >
                    지출
                  </S.Label>
                </S.Option>
                <S.Option>
                  <input
                    type="radio"
                    value="income"
                    checked={selectedIsIncome === "income"}
                    onChange={handleIsInComeChange}
                  />
                  <S.Label
                    style={{
                      color:
                        selectedIsIncome === "income"
                          ? COLORS.BLUE
                          : COLORS.GREY[300],
                    }}
                    onClick={() => setSelectedIsIncome("income")}
                  >
                    수입
                  </S.Label>
                </S.Option>
              </S.Option>
            </S.AddCategoryForm>
            <S.AddNameForm>
              <h4>일정 이름</h4>
              <Input
                value={scheduleName}
                type="text"
                size={20}
                onChange={setScheduleName}
              />
            </S.AddNameForm>
          </S.AddFormLeft>
          <S.AddFormRight>
            <S.AddPriceForm>
              <h4>금액</h4>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>* 입력하지 않으면 '변동'이라는 값으로 들어갑니다.</p>
              <Input
                value={entirePrice}
                type="text"
                size={20}
                placeholder="원"
                onChange={setEntirePrice}
              />
            </S.AddPriceForm>
            <S.AddMemberPartitionForm>
              <h4>구성원 할당하기</h4>
              <p>* 설정하지 않으면 자신에게 모든 금액이 할당됩니다.</p>
              <p>* 구성원을 할당하게 되면 알림 메시지가 전송됩니다.</p>
              {members.map(member => (
                <S.MemberList key={member.id}>
                  <S.Division>
                    <p>{member.nickname}</p>
                    <Input
                      // @ts-ignore
                      value={
                        // eslint-disable-next-line @typescript-eslint/no-shadow
                        price.find(price => price.id === member.id)?.value
                      }
                      type="number"
                      size={8}
                      onChange={event => handlePriceChange(event, member.id)}
                    />
                    <p>원</p>
                  </S.Division>
                </S.MemberList>
              ))}
            </S.AddMemberPartitionForm>
          </S.AddFormRight>
        </S.BankingAddFormBox>
        <S.StyledIconPlusButton
          iconOnly
          iconName="circlePlus"
          iconSize="3.5rem"
          onClick={inputSchedule}
        />
      </S.BankingAddForm>
      <S.BankingAddList>
        <h4>현재 추가된 목록</h4>
        <S.BankingAddListWrapper>
          {scheduleList.map(schedules => (
            <S.Box>
              <S.StyledIcon
                iconName="wallet"
                color={COLORS.GREY[300]}
                size="3rem"
              />
              <S.BankingAddInfoWrapper key={schedules.name}>
                <h5>{schedules.name}</h5>
                <h6>
                  매달 {schedules.notificationDate}일/{schedules.value}/
                  {schedules.isIncome}
                </h6>
                <p key={schedules.assignments.id}>
                  {schedules.assignments.id}･{schedules.assignments.value}
                </p>
              </S.BankingAddInfoWrapper>
              {/* eslint-disable-next-line react/button-has-type */}
              <S.StyledIcon iconName="cancel" color={COLORS.GREY[300]} />
            </S.Box>
          ))}
        </S.BankingAddListWrapper>
        <Button
          title="금융 일정 추가하기"
          theme="quaternary"
          width="27rem"
          onClick={AddSchedules}
        />
      </S.BankingAddList>
    </S.BankingAdd>
  );
}
