import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import Icon from "../../Icon";

const Wrapper = styled.div`
  background-color: white;
  box-shadow: rgba(7, 42, 68, 0.18) 0px 4px 14px 0px;
  border-radius: 0.5rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  position: absolute;
  top: 5rem;
  width: 100%;
  flex-direction: column;
  z-index: 999;
  padding: 2rem;
`;

const IsIncome = styled.button`
  display: flex;
  gap: 2.5rem;
  background-color: transparent;
  border: none;
  color: ${COLORS.GREY[500]};
  text-align: start;
  font-size: 1.4rem;
  cursor: pointer;
`;
export default function HistoryModal() {
  return (
    <Wrapper>
      <IsIncome>
        내역 전체보기
        <Icon iconName="arrowRight" size="1.3rem" />
      </IsIncome>
      <IsIncome>
        지출 내역보기
        <Icon iconName="arrowRight" size="1.3rem" />
      </IsIncome>
      <IsIncome>
        수입 내역보기
        <Icon iconName="arrowRight" size="1.3rem" />
      </IsIncome>
    </Wrapper>
  );
}
