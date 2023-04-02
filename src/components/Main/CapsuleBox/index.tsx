import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as S from "./index.styles";
import COLORS from "../../../constants/color";
import QUERYKEYS from "../../../constants/querykey";
import { loadMonthAsset } from "../../../api/book";
import getMoneyUnit from "../../../utils/money";
import { createBudgetModalAtom } from "../../../stores/atoms/context";
import Modal from "../../Modal";
import Create from "../../../pages/budget/create";
import PATH from "../../../constants/path";

export default function CapsuleBox() {
  const { bookId } = useParams();
  const date = new Date();
  const navigate = useNavigate();

  const [createModalOpen, setCreateModalOpen] = useRecoilState(
    createBudgetModalAtom,
  );

  const queryFn = () =>
    loadMonthAsset(
      Number(bookId),
      `${date.getFullYear()}/${date.getMonth() + 1}`,
    );
  const { data } = useQuery([QUERYKEYS.LOAD_MONTH_ASSET], queryFn);

  if (!data) {
    return null;
  }

  const BoxList = [
    {
      title: "이번 달 지출",
      amount: `${data.record ? getMoneyUnit(data.record.value) : 0}원`,
      Button: {
        title: "지출 분석하러 가기",
        iconName: "check",
        theme: "normal",
        color: COLORS.BLUE,
        onClick: () => {
          // 이번 달 지출 분석 페이지로이동
        },
      },
    },
    {
      title: "이번 달 수입",
      amount: `${data.income ? getMoneyUnit(data.income.value) : 0}원`,
      Button: {
        title: "수입 분석하러 가기",
        iconName: "check",
        theme: "normal",
        color: COLORS.BLUE,
        onClick: () => {
          // 이번 달 수입 분석 페이지로 이동
        },
      },
    },
    {
      title: "예산",
      amount: data?.budget?.value
        ? `${getMoneyUnit(data?.budget?.value)}원`
        : false,
      subtitle: `설정하신 예산이 없습니다.\n예산을 설정하고 계획적으로 관리 해보세요!`,
      Button: {
        title: "예산 설정하러 가기",
        iconName: "circleCheck",
        color: COLORS.YELLOW,
        onClick: () => {
          navigate(`${PATH.BUDGET}/${bookId}`);
          setTimeout(() => {
            setCreateModalOpen(true);
          }, 500); // 0.5초 후에 setCreateModalOpen(true) 함수 호출
        },
      },
    },
  ];

  return (
    <S.Container>
      {createModalOpen && (
        <Modal
          closeModal={() => {
            setCreateModalOpen(false);
          }}
        >
          <Create />
        </Modal>
      )}
      {BoxList.map(box => (
        <S.Wrapper key={box.title}>
          <S.Title>{box.title}</S.Title>
          {!box.amount && <S.Subtitle>{box.subtitle}</S.Subtitle>}

          <S.Amount>{box.amount}</S.Amount>
          <S.StyledButton
            title={box.Button.title}
            iconName={box.Button.iconName}
            color={box.Button.color}
            onClick={box.Button.onClick}
          />
        </S.Wrapper>
      ))}
    </S.Container>
  );
}
