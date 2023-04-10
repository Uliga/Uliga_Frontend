import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Create from "../create";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import { createModalAtom } from "../../stores/atoms/context";
import CapsuleBox from "../../components/Main/CapsuleBox";
import Calendar from "../../components/Main/Calendar";
import BottomSheet from "../../components/BottomSheet";
import MainScheduleList from "../../components/Main/Schedule";
import * as S from "./index.styles";

export default function Main() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [createModalOpen, setCreateModalOpen] = useRecoilState(createModalAtom);

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
      <BookNav path={PATH.MAIN} />
      <S.WriteButton
        theme="primary"
        title="가계부 작성하기"
        onClick={() => {
          navigate(`${PATH.WRITE}/${bookId}`);
        }}
      />
      <CapsuleBox />
      <S.Bottom>
        <Calendar />
        <MainScheduleList />
      </S.Bottom>
      <BottomSheet />
    </S.Container>
  );
}
