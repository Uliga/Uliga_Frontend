import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import COLORS from "../../../constants/color";
import * as S from "./index.styles";
import PATH from "../../../constants/path";
import useBook from "../../../hooks/book/useBook";

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

  return (
    <S.Container>
      <h5>다가오는 금융 일정 📆</h5>
      <S.Wrapper>
        {data.schedules.map((schedule: ScheduleProps) => (
          <S.ScheduleWrapper key={schedule.name}>
            <S.StyledBadge
              size={1.15}
              title={`${schedule.notificationDay}일`}
              color="white"
              bgColor={
                // eslint-disable-next-line no-nested-ternary
                schedule.notificationDay === 15
                  ? COLORS.RED.LIGHT
                  : schedule.notificationDay === 16
                  ? COLORS.YELLOW
                  : COLORS.GREEN.DARK
              }
            />
            <div>
              <h6>{schedule.name}</h6>
              <p>
                {schedule.value}원 / {schedule.isIncome ? <>수입</> : <>지출</>}
              </p>
            </div>
          </S.ScheduleWrapper>
        ))}
      </S.Wrapper>
      <S.EditButton
        title="금융 일정 수정하기"
        theme="quaternary"
        onClick={() => navigate(`${PATH.SCHEDULE}/${bookId}`)}
      />
    </S.Container>
  );
}
