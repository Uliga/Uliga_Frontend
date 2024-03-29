import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import LoadingBar from "../../../components/LoadingBar";
import useMe from "../../../hooks/book/useMe";
import Dialog from "../../../components/Dialog";
import IconButton from "../../../components/IconButton";

const Container = styled.div`
  width: 88rem;
  height: 57rem;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  h3 {
    font-weight: 700;
  }
  margin-left: 27.5rem;
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ModifyButton = styled(Button)`
  border-radius: 0.5rem;
  padding: 1rem 3.5rem;
  font-size: 1.4rem;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const DeleteButton = styled(Button)`
  margin: 0 0 4rem 0;
  padding: 0;
  color: ${COLORS.GREY[400]};
  background-color: transparent;
  font-size: 1.2rem;
  &:hover {
    border: none;
    color: black;
  }
  &:focus {
    border: none;
    outline: none;
    color: black;
  }
`;
const Password = styled.div`
  position: relative;
  display: flex;
  button {
    position: absolute;
    margin-top: 4rem;
    margin-right: 1.5rem;
    right: 0;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 10rem;
  position: relative;
  padding-top: 2rem;
`;

export default function SettingMe() {
  const {
    loadingInfo,
    infoData,
    inputs,
    checkNickname,
    deleteDialogOpen,
    setDeleteDialogOpen,
    deleteUser,
    lookPassword,
    isValidatePassword,
    password,
    passwordCheck,
  } = useMe();

  if (loadingInfo || !infoData)
    return (
      <Container>
        <LoadingBar type={6} />
      </Container>
    );

  return (
    <Container>
      {deleteDialogOpen && (
        <Dialog
          size={37}
          title="회원 탈퇴"
          description="정말 탈퇴 하시겠습니까?"
          visible
          cancellable
          onCancel={() => {
            setDeleteDialogOpen(false);
          }}
          onConfirm={() => {
            deleteUser();
            setDeleteDialogOpen(false);
          }}
        />
      )}
      <Info>
        <h3>기본 정보</h3>
        {inputs.map(input =>
          input.label === "애플리케이션 비밀번호" ||
          input.label === "비밀번호" ||
          input.label === "비밀번호 확인" ? (
            <Password>
              <Input
                key={input.label}
                size={80}
                label={input.label}
                value={input.value}
                type={input.type}
                onChange={input.onChange}
                message={input.message}
              />
              <IconButton
                iconOnly
                iconName={input.visible ? "eyeSlash" : "eye"}
                onClick={() => lookPassword(input.label)}
              />
            </Password>
          ) : (
            <Input
              key={input.label}
              size={80}
              label={input.label}
              value={input.value}
              readOnly={input.readOnly}
              type={input.type}
              onChange={input.onChange}
              placeholder={input.placeholder}
            />
          ),
        )}
      </Info>
      <Bottom>
        <ModifyButton
          theme="quaternary"
          title="수정하기"
          onClick={checkNickname}
          disabled={
            (password.length > 0 || passwordCheck.length > 0) &&
            !(isValidatePassword && password === passwordCheck)
          }
        />
        <DeleteButton
          theme="tertiary"
          title="회원 탈퇴"
          onClick={() => {
            setDeleteDialogOpen(true);
          }}
        />
      </Bottom>
    </Container>
  );
}
