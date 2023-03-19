import React, { useEffect, useState } from "react";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import Input from "../../../components/Input";
import useBankingSchedule from "../../../hooks/useBankingSchedule";

// const member = [
//   {
//     name: "윤채현",
//     price: "600,000",
//   },
//   {
//     name: "이시원",
//     price: "600,000",
//   },
//   {
//     name: "나연경",
//     price: "600,000",
//   },
// ];
export default function Add() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedIsIncome, setSelectedIsIncome] = useState("");
  const { GetMember, members } = useBankingSchedule();
  useEffect(() => {
    GetMember();
  }, []);
  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  const handleIsInComeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedIsIncome(event.target.value);
  };
  return (
    <S.BankingAddForm>
      <S.BankingAddFormBox>
        <S.AddFormLeft>
          <S.AddDateForm>
            <h4>날짜</h4>
            <S.Option>
              <input
                type="radio"
                name="test"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              <S.Label
                style={{
                  color:
                    selectedOption === "option1"
                      ? COLORS.BLUE
                      : COLORS.GREY[300],
                }}
                onClick={() => setSelectedOption("option1")}
              >
                매달 말일
              </S.Label>
            </S.Option>
            <S.Option>
              <input
                type="radio"
                name="test"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              <S.Label
                style={{
                  color:
                    selectedOption === "option2"
                      ? COLORS.BLUE
                      : COLORS.GREY[300],
                }}
                onClick={() => setSelectedOption("option2")}
              >
                매달 1일
              </S.Label>
            </S.Option>
            <S.Option3>
              <input
                type="radio"
                name="test"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              <S.Label
                style={{
                  color:
                    selectedOption === "option3"
                      ? COLORS.BLUE
                      : COLORS.GREY[300],
                }}
                onClick={() => setSelectedOption("option3")}
              >
                <p>매달</p>
                <S.OptionInput type="number" />
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
                  value="optionA"
                  checked={selectedIsIncome === "optionA"}
                  onChange={handleIsInComeChange}
                />
                <S.Label
                  style={{
                    color:
                      selectedIsIncome === "optionA"
                        ? COLORS.BLUE
                        : COLORS.GREY[300],
                  }}
                  onClick={() => setSelectedIsIncome("optionA")}
                >
                  지출
                </S.Label>
              </S.Option>
              <S.Option>
                <input
                  type="radio"
                  value="optionB"
                  checked={selectedIsIncome === "optionB"}
                  onChange={handleIsInComeChange}
                />
                <S.Label
                  style={{
                    color:
                      selectedIsIncome === "optionB"
                        ? COLORS.BLUE
                        : COLORS.GREY[300],
                  }}
                  onClick={() => setSelectedIsIncome("optionB")}
                >
                  수입
                </S.Label>
              </S.Option>
            </S.Option>
          </S.AddCategoryForm>
          <S.AddNameForm>
            <h4>일정 이름</h4>
            <Input value="" type="text" size={20} />
          </S.AddNameForm>
        </S.AddFormLeft>
        <S.AddFormRight>
          <S.AddPriceForm>
            <h4>금액</h4>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>* 입력하지 않으면 '변동'이라는 값으로 들어갑니다.</p>
            <Input value="" type="text" size={20} placeholder="원" />
          </S.AddPriceForm>
          <S.AddMemberPartitionForm>
            <h4>구성원 할당하기</h4>
            <p>* 설정하지 않으면 자신에게 모든 금액이 할당됩니다.</p>
            <p>* 구성원을 할당하게 되면 알림 메시지가 전송됩니다.</p>
            {members.map(member => (
              <S.MemberList>
                <S.Division key={member.id}>
                  <p>{member.nickname}</p>
                  <Input value="1" type="text" size={8} />
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
      />
    </S.BankingAddForm>
  );
}
