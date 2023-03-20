import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import Input from "../../../components/Input";
import useBankingSchedule from "../../../hooks/useBankingSchedule";
import Button from "../../../components/Button";

// interface Assignments {
//   id: number;
//   value: number;
// }
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
export default function Add() {
  const { bookId } = useParams();
  const {
    getMember,
    members,
    setPrice,
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
    mutateSchedules,
    setScheduleList,
    setAssignments,
    clearScheduleList,
  } = useBankingSchedule();
  // const scheduleToDelete = scheduleList.find(
  //   schedule => schedule.name === idToDelete,
  // );
  // scheduleList = scheduleList.filter(schedule => schedule.name !== idToDelete);
  const removeSchedules = (selected: Schedules) => {
    setScheduleList(scheduleList.filter((ele: Schedules) => ele !== selected));
  };
  useEffect(() => {
    const initialPrice = members.map(member => ({
      username: member.username,
      value: 0,
    }));
    const initialInfo = members.map(member => ({
      username: member.username,
      id: member.id,
      value: 0,
    }));
    setPrice(initialPrice);
    setAssignments(initialInfo);
  }, [members]);
  useEffect(() => {
    getMember();
  }, []);

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
                    <p>{member.username}</p>
                    <Input
                      // @ts-ignore
                      value={
                        // eslint-disable-next-line @typescript-eslint/no-shadow
                        price.find(price => price.username === member.username)
                          ?.value
                      }
                      type="number"
                      size={8}
                      onChange={event =>
                        handlePriceChange(event, member.username, member.id)
                      }
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
                  매달 {schedules.notificationDate}일/{schedules.value}원/
                  {schedules.isIncome ? <>수입</> : <>지출</>}
                </h6>
                <div>
                  {price.map((ass, index) => (
                    <p key={ass.username}>
                      {ass.username} {ass.value}
                      {index !== price.length - 1 && " ･ "}
                    </p>
                  ))}
                </div>
              </S.BankingAddInfoWrapper>
              <S.CancelIconButton
                iconName="cancel"
                color={COLORS.GREY[300]}
                onClick={() => {
                  removeSchedules(schedules);
                }}
              />
            </S.Box>
          ))}
        </S.BankingAddListWrapper>
        <Button
          title="금융 일정 추가하기"
          theme="quaternary"
          width="27rem"
          onClick={() => {
            mutateSchedules.mutate({
              id: Number(bookId),
              schedules: scheduleList,
            });
            clearScheduleList();
          }}
        />
      </S.BankingAddList>
    </S.BankingAdd>
  );
}
