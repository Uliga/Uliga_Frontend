import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Create from "../create";
import BookNav from "../../components/Main/BookNav";
import PATH from "../../constants/path";
import { createModalAtom } from "../../stores/atoms/context";
import CapsuleBox from "../../components/Main/CapsuleBox";
import Schedule from "../../components/Main/Schedule";
import Calendar from "../../components/Main/Calendar";

const WriteButton = styled(Button)`
  font-size: 1.4rem;
  position: absolute;
  right: 4rem;
  padding: 1.2rem 2.5rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  gap: 2rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export default function Main() {
  const { isLoading, data } = useQuery([QUERYKEYS.LOAD_ME], loadMe);
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [createModalOpen, setCreateModalOpen] = useRecoilState(createModalAtom);

  return (
    <Container>
      {createModalOpen && (
        <Modal
          closeModal={() => {
            setCreateModalOpen(false);
          }}
        >
          <Create />
        </Modal>
      )}
      <BookNav />
      <WriteButton
        theme="primary"
        title="가계부 작성하기"
        onClick={() => {
          navigate(`${PATH.WRITE}/${bookId}`);
        }}
      />
      <CapsuleBox />
      <Bottom>
        <Calendar />
        <Schedule />
      </Bottom>
    </Container>
  );
}
