import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import * as S from "./index.styles";
import useBook from "../../hooks/book/useBook";
import ScheduleList from "../../components/ScheduleList";
import EditShare from "../../components/Book/Schedule/editShare";
import EditPrivate from "../../components/Book/Schedule/editPrivate";
import AddShare from "../../components/Book/Schedule/addShare";
import AddPrivate from "../../components/Book/Schedule/addPrivate";

export default function Schedule() {
  const { useSchedule } = useBook();
  const data = useSchedule();
  const [isAddTab, setTab] = useState(true);
  const { bookId } = useParams();
  const privateBook = localStorage.getItem("privateAccountBookId");
  if (!data) return null;
  const buttonList = [
    {
      isAdd: true,
      title: "금융 일정 추가",
      onClick: () => {
        setTab(buttonList[0].isAdd);
      },
    },
    {
      isAdd: false,
      title: "금융 일정 수정",
      onClick: () => {
        setTab(buttonList[1].isAdd);
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
            key={button.title}
            type="button"
            onClick={button.onClick}
            isSelected={isAddTab === button.isAdd}
          >
            {button.title}
          </S.TabButton>
        ))}
        {isAddTab &&
          (privateBook === bookId ? (
            <AddPrivate schedules={data.schedules} />
          ) : (
            <AddShare schedules={data.schedules} />
          ))}
        {!isAddTab &&
          (privateBook === bookId ? <EditPrivate /> : <EditShare />)}
        <S.ScheduleWrapper>
          <ScheduleList schedules={data.schedules} />
        </S.ScheduleWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
