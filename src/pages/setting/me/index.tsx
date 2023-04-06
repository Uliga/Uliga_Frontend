import React from "react";
import styled from "styled-components";
import COLORS from "../../../constants/color";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

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
  font-size: 1rem;
`;
const DeleteButton = styled(Button)`
  position: absolute;
  bottom: 0;
  margin: 0 0 4rem 0;
  color: ${COLORS.GREY[600]};
  background-color: transparent;

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
  const inputs = [
    {
      label: "사용자 이메일",
      value: "ham9893@naver.com",
      readOnly: true,
    },
    {
      label: "사용자 이름",
      value: "함민혁",
      readOnly: true,
    },
    {
      label: "사용자 닉네임",
      value: "함혁",
      readOnly: false,
    },
    {
      label: "애플리케이션 비밀번호",
      value: "함혁",
      readOnly: false,
      type: "password",
    },
  ];
  return (
    <Container>
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
          />
        ))}
      </Info>
      <ModifyButton theme="primary" title="수정하기" />
      <DeleteButton theme="tertiary" title="삭제하기" />
    </Container>
  );
}
