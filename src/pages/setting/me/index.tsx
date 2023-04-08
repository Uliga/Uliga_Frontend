import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import COLORS from "../../../constants/color";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { IUserInfo } from "../../../interfaces/user";
import QUERYKEYS from "../../../constants/querykey";
import { loadMe } from "../../../api/user";
import LoadingBar from "../../../components/LoadingBar";
import useInput from "../../../hooks/useInput";
import useMe from "../../../hooks/book/useMe";
import { deleteScheduleDialogAtom } from "../../../stores/atoms/context";
import Dialog from "../../../components/Dialog";

const Container = styled.div`
  width: 88rem;
  height: 60rem;
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
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const InfoInput = styled(Input)``;
const ModifyButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 4rem 4rem 0;
  border-radius: 0.5rem;
  padding: 1rem 3rem 1rem 3rem;
  font-size: 1.3rem;
`;
const DeleteButton = styled(Button)`
  position: absolute;
  bottom: 0;
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

export default function SettingMe() {
  const { isLoading: loadingInfo, data: infoData } = useQuery<
    IUserInfo | undefined
  >([QUERYKEYS.LOAD_ME], loadMe);
  const { nickName, onChangeNickname, checkNickname, deleteUser } = useMe();
  const [password, onChangePassword] = useInput("123456");
  const [deleteDialogOpen, setDeleteDialogOpen] = useRecoilState(
    deleteScheduleDialogAtom,
  );
  if (loadingInfo || !infoData)
    return (
      <Container>
        <LoadingBar type={6} />
      </Container>
    );

  const inputs = [
    {
      label: "사용자 이메일",
      value: infoData.memberInfo.email,
      readOnly: true,
    },
    {
      label: "사용자 이름",
      value: infoData.memberInfo.userName,
      readOnly: true,
    },
    {
      label: "사용자 닉네임",
      value: nickName,
      placeholder: infoData.memberInfo.nickName,
      readOnly: false,
      onChange: onChangeNickname,
    },
    {
      label: "애플리케이션 비밀번호",
      value: password,
      readOnly: false,
      type: "password",
      onChange: onChangePassword,
    },
  ];
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
        {inputs.map(input => (
          <InfoInput
            key={input.label}
            size={80}
            label={input.label}
            value={input.value}
            readOnly={input.readOnly}
            type={input.type}
            onChange={input.onChange}
            placeholder={input.placeholder}
          />
        ))}
      </Info>
      <ModifyButton
        theme="quaternary"
        title="수정하기"
        onClick={checkNickname}
      />

      <DeleteButton
        theme="tertiary"
        title="회원 탈퇴"
        onClick={() => {
          setDeleteDialogOpen(true);
        }}
      />
    </Container>
  );
}
