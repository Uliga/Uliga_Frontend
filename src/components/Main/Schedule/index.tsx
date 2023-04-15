import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import COLORS from "../../../constants/color";
import * as S from "./index.styles";
import PATH from "../../../constants/path";
import useBook from "../../../hooks/book/useBook";
import { getRemainDate } from "../../../utils/date";

interface ScheduleProps {
  name: string;
  notificationDay: number;
  value: number;
  isIncome: boolean;
}

export default function MainScheduleList() {
  const { bookId } = useParams();
  const { useSchedule } = useBook();
  const navigate = useNavigate();
  const data = useSchedule();
  if (!data) return null;

  const text = `현재 등록된 금융 일정이 없습니다. 
정기적인 지출 ∙ 수입을 기록하고 
다가오는 일정을 잊지않게 확인해보세요!`;

  return (
    <S.Container>
      {data.schedules.length !== 0 && <h5>다가오는 금융 일정 📆</h5>}
      <S.Wrapper>
        {data.schedules.length === 0 && <S.Nothing>{text}</S.Nothing>}
        {data.schedules.map((schedule: ScheduleProps) => (
          <S.ScheduleWrapper key={schedule.name}>
            <S.StyledBadge
              size={1.15}
              title={`${schedule.notificationDay}일`}
              color="white"
              bgColor={
                // eslint-disable-next-line no-nested-ternary
                getRemainDate(schedule.notificationDay) < 3
                  ? COLORS.RED.LIGHT
                  : getRemainDate(schedule.notificationDay) < 7
                  ? COLORS.YELLOW
                  : COLORS.GREEN.DARK
              }
            />
            <div>
              <h6>{schedule.name}</h6>
              <p>
                {schedule.value !== -1 ? `${schedule.value}원` : "변동"} /{" "}
                {schedule.isIncome ? <>수입</> : <>지출</>}
              </p>
            </div>
          </S.ScheduleWrapper>
        ))}
      </S.Wrapper>
      <S.EditButton
        title={
          data.schedules.length !== 0
            ? "금융 일정 수정하기"
            : "금융 일정 추가하러 가기"
        }
        theme="quaternary"
        onClick={() => navigate(`${PATH.SCHEDULE}/${bookId}`)}
      />
    </S.Container>
  );
}
