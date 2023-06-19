import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import Modal from "../../components/Modal";
import Create from "../create";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import { createModalAtom } from "../../stores/atoms/context";
import CapsuleBox from "../../components/Main/CapsuleBox";
import Calendar from "../../components/Main/Calendar";
import BottomSheet from "../../components/Main/BottomSheet";
import MainScheduleList from "../../components/Main/Schedule";
import * as S from "./index.styles";
import NoExist from "../noExist";

export default function Main() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [createModalOpen, setCreateModalOpen] = useRecoilState(createModalAtom);
  if (bookId !== localStorage.getItem("privateAccountBookId")) {
    return <NoExist />;
  }
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
