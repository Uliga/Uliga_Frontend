import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { loadMe } from "../../api/user";
import LoadingBar from "../../components/LoadingBar";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Create from "../create";
import QUERYKEYS from "../../constants/querykey";
import BookNav from "../../components/BookNav";
import { createModalAtom } from "../../stores/atoms/context";

const WriteButton = styled(Button)`
  font-size: 1.4rem;
  position: absolute;
  right: 3rem;
  top: 3rem;
  padding: 1.2rem 2.5rem;
`;

const Container = styled.div`
  width: 100%;
  padding: 3rem;
`;

export default function Main() {
  const { isLoading, data } = useQuery([QUERYKEYS.LOAD_ME], loadMe);
  console.log(data);
  const [createModalOpen, setCreateModalOpen] = useRecoilState(createModalAtom);

  if (isLoading) return <LoadingBar type={8} />;

  return (
    <Container>
      <BookNav />
      <WriteButton theme="primary" title="가계부 작성하기" />
      {createModalOpen && (
        <Modal
          closeModal={() => {
            setCreateModalOpen(false);
          }}
        >
          <Create />
        </Modal>
      )}
    </Container>
  );
}
