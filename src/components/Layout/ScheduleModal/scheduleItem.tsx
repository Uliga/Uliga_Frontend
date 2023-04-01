import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import { NotificationProps } from "../../../interfaces/user";
import getMoneyUnit from "../../../utils/money";

const Container = styled.div`
  display: flex;
  height: 9rem;
  width: 100%;
  padding-left: 1.5rem;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  padding-bottom: 1.5rem;
`;

const Info = styled.div`
  display: flex;
  gap: 0.2rem;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

const UserName = styled.div`
  font-size: 1.25rem;
  p {
    font-weight: 700;
  }
  display: flex;
  color: ${COLORS.GREY[600]};
  padding-bottom: 0.5rem;
`;
const ScheduleName = styled.div`
  font-size: 1.6rem;
  color: ${COLORS.GREY[600]};
`;

const SubInfo = styled.div`
  font-size: 1.25rem;
  color: ${COLORS.GREY[500]};
  display: flex;

  p {
    font-size: 1.25rem;
    color: ${COLORS.BLUE};
    display: flex;
    padding-left: 0.6rem;
  }
`;

export default function ScheduleItem({ item }: { item: NotificationProps }) {
  return (
    <Container>
      <Info>
        <UserName>
          <p>{item.creatorName}</p>님의 금융 일정 할당
        </UserName>
        <ScheduleName>{item.scheduleName}</ScheduleName>
        <SubInfo>
          {`매달 ${item.day} 일`} <p>{getMoneyUnit(item.value)}원</p>
        </SubInfo>
      </Info>
    </Container>
  );
}
