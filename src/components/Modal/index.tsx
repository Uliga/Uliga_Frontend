import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/color";
import IconButton from "../IconButton";

const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
`;

const ModalBox = styled.div`
  position: fixed;
  border-radius: 1rem;
  width: 50rem;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(IconButton)`
  position: absolute;
  right: 3rem;
  top: 2rem;
`;

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}
export default function Modal({ children, closeModal }: ModalProps) {
  return (
    <ModalBackground onClick={closeModal}>
      <ModalBox onClick={e => e.stopPropagation()}>
        {children}
        <Button
          iconOnly
          iconName="close"
          iconSize="2.5rem"
          color={COLORS.GREY[300]}
          border={0.6}
          onClick={closeModal}
        />
      </ModalBox>
    </ModalBackground>
  );
}
