import React, { useState } from "react";
import * as S from "./index.styles";
import BookNav from "../../../components/Main/BookNav";
import PATH from "../../../constants/path";
import Schedule from "./Scedule";
import COLORS from "../../../constants/color";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

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
const member = [
  {
    name: "윤채현",
    price: "600,000",
  },
  {
    name: "이시원",
    price: "600,000",
  },
  {
    name: "나연경",
    price: "600,000",
  },
];
export default function Add() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };
  return (
    <S.Container>
      <BookNav path={`${PATH.BANKING}`} />
      <h3>금융 일정 관리</h3>
      <p>정기적인 지출 / 수입을 저장해두고, 효과적으로 관리해보세요!</p>
      <S.MiddleContainer>
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
                        name="test"
                        value="optionA"
                        checked={selectedOption === "optionA"}
                        onChange={handleOptionChange}
                      />
                      <S.Label
                        style={{
                          color:
                            selectedOption === "optionA"
                              ? COLORS.BLUE
                              : COLORS.GREY[300],
                        }}
                        onClick={() => setSelectedOption("optionA")}
                      >
                        지출
                      </S.Label>
                    </S.Option>
                    <S.Option>
                      <input
                        type="radio"
                        name="test"
                        value="optionB"
                        checked={selectedOption === "optionB"}
                        onChange={handleOptionChange}
                      />
                      <S.Label
                        style={{
                          color:
                            selectedOption === "optionB"
                              ? COLORS.BLUE
                              : COLORS.GREY[300],
                        }}
                        onClick={() => setSelectedOption("optionB")}
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
                  {member.map(mem => (
                    <S.MemberList>
                      <S.Division key={mem.name}>
                        <p>{mem.name}</p>
                        <Input value={mem.price} type="text" size={8} />
                        <p>원</p>
                      </S.Division>
                    </S.MemberList>
                  ))}
                </S.AddMemberPartitionForm>
              </S.AddFormRight>
            </S.BankingAddFormBox>
          </S.BankingAddForm>
          <S.BankingAddList>
            <h4>현재 추가된 목록</h4>
            <S.BankingAddListWrapper>
              {schedueAddList.map(schedule => (
                <S.Box>
                  <S.StyledIcon
                    iconName="wallet"
                    color={COLORS.GREY[300]}
                    size="3rem"
                  />
                  <S.BankingAddInfoWrapper key={schedule.title}>
                    <h5>{schedule.title}</h5>
                    <h6>
                      {schedule.day}/{schedule.price}/{schedule.isIncome}
                    </h6>
                    <p>{schedule.description}</p>
                  </S.BankingAddInfoWrapper>
                  {/* eslint-disable-next-line react/button-has-type */}
                  <S.StyledIcon iconName="cancel" color={COLORS.GREY[300]} />
                </S.Box>
              ))}
            </S.BankingAddListWrapper>
            <Button
              title="금융 일정 수정하기"
              theme="quaternary"
              width="27rem"
            />
          </S.BankingAddList>
        </S.BankingAdd>
        <Schedule />
      </S.MiddleContainer>
    </S.Container>
  );
}
