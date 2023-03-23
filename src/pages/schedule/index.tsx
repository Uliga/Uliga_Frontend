import React, { useState } from "react";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import * as S from "./index.styles";
import ScheduleList from "../../components/ScheduleList";
import AddScheduleForm from "./add_share";

export default function Schedule() {
  const [curTab, setCurTab] = useState("금융 일정 추가");

  const buttonList = [
    {
      title: "금융 일정 추가",
      onClick: () => {
        setCurTab(buttonList[0].title);
      },
    },
    {
      title: "금융 일정 수정",
      onClick: () => {
        setCurTab(buttonList[1].title);
      },
    },
  ];
  return (
    <S.Container>
      <BookNav path={PATH.SCHEDULE} />
      <div>
        <h1>금융 일정 관리</h1>
        <h4>정기적인 지출 ∙ 수입을 저장해두고, 효과적으로 관리해보세요!</h4>
      </div>
      <S.Wrapper>
        {buttonList.map(button => (
          <S.TabButton
            type="button"
            onClick={button.onClick}
            isSelected={curTab === button.title}
          >
            {button.title}
          </S.TabButton>
        ))}
        <AddScheduleForm />
        <S.ScheduleWrapper>
          <ScheduleList />
        </S.ScheduleWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
