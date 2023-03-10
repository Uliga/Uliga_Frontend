import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { loadMe } from "../../api/user";
import LoadingBar from "../../components/LoadingBar";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Create from "../create";
import QUERYKEYS from "../../constants/querykey";

const WriteButton = styled(Button)`
  font-size: 1.4rem;
  position: absolute;
  right: 3rem;
  top: 3rem;
  padding: 1.2rem 2.5rem;
`;

export default function Main() {
  const { isLoading, data } = useQuery([QUERYKEYS.LOAD_ME], loadMe);
  const [openModal, setModal] = useState(true);
  const closeModal = () => {
    setModal(false);
  };
  if (isLoading) return <LoadingBar type={8} />;

  return (
    <div>
      <WriteButton
        theme="primary"
        title="가계부 작성하기"
        onClick={() => {
          setModal(true);
        }}
      />
      {openModal && (
        <Modal closeModal={closeModal}>
          <Create />
        </Modal>
      )}
      {data.memberInfo.email}
    </div>
  );
}
