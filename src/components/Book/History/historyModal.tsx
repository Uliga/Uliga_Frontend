import React from "react";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import Icon from "../../Icon";
import PATH from "../../../constants/path";
import { historyTabsAtom } from "../../../stores/atoms/context";

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
  border: none;
  background-color: transparent;
  color: ${COLORS.GREY[500]};
  text-align: start;
  font-size: 1.4rem;
  cursor: pointer;
  z-index: 999999;
`;
export default function HistoryModal() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [curTab, setCurTab] = useRecoilState(historyTabsAtom);

  return (
    <Wrapper>
      <IsIncome
        onClick={() => {
          setCurTab({
            tab: "내역 전체보기",
            category: curTab.category,
          });
          navigate(`${PATH.HISTORY}/${bookId}`);
        }}
      >
        내역 전체보기
        <Icon iconName="arrowRight" size="1.3rem" />
      </IsIncome>
      <IsIncome
        onClick={() => {
          setCurTab({
            tab: "지출 내역보기",
            category: curTab.category,
          });
          navigate(`${PATH.RECORD}/${bookId}`);
        }}
      >
        지출 내역보기
        <Icon iconName="arrowRight" size="1.3rem" />
      </IsIncome>
      <IsIncome
        onClick={() => {
          setCurTab({
            tab: "수입 내역보기",
            category: curTab.category,
          });
          navigate(`${PATH.INCOME}/${bookId}`);
        }}
      >
        수입 내역보기
        <Icon iconName="arrowRight" size="1.3rem" />
      </IsIncome>
    </Wrapper>
  );
}
