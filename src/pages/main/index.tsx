import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { loadMe } from "../../api/user";
import LoadingBar from "../../components/common/LoadingBar";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import Create from "../create";

const WriteButton = styled(Button)`
  font-size: 1.4rem;
  position: absolute;
  right: 3rem;
  top: 3rem;
  padding: 1.2rem 2.5rem;
`;

export default function Main() {
  const { isLoading, data } = useQuery(["me"], loadMe);
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
