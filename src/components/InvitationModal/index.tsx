import styled from "styled-components";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import COLORS from "../../constants/color";
import QUERYKEYS from "../../constants/querykey";
import { loadMe } from "../../api/user";
import LoadingBar from "../LoadingBar";
import InviteItem from "./inviteItem";
import { IUserInfo } from "../../interfaces/user";
import Nothing from "./nothing";

const Wrapper = styled.div`
  background-color: white;
  box-shadow: rgba(7, 42, 68, 0.2) 0px 4px 14px 0px;
  border: 0.1rem solid ${COLORS.GREY[200]};
  border-radius: 0.5rem;
  display: flex;
  position: absolute;
  top: 4.6rem;
  right: 0.5rem;
  width: 38rem;
  height: 40rem;
  flex-direction: column;
  z-index: 999;
  padding-bottom: 2rem;
`;

const Tooltip = styled.div`
  width: 20px;
  background-color: white;
  height: 20px;
  content: "";
  border-radius: 1px;
  border: 1px solid ${COLORS.GREY[200]};
  box-shadow: rgba(7, 42, 68, 0.1) 0px 4px 14px 0px;
  transform: rotate(135deg);
  position: absolute;
  left: 34.5rem;
  top: -0.5rem;
  z-index: -999;
`;

const Title = styled.div`
  align-items: center;
  padding: 1.2rem 2rem 1.2rem 2rem;
  font-size: 1.4rem;
  background-color: #f9fafb;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  color: ${COLORS.GREY[500]};
  span {
    padding-left: 0.5rem;
    font-weight: 700;
    color: ${COLORS.BLUE};
  }
`;
const Modal = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 38rem;
  height: 35rem;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 999;
`;

export default function MessageModal() {
  const { isLoading, data } = useQuery<IUserInfo | undefined>(
    [QUERYKEYS.LOAD_ME],
    loadMe,
  );

  if (isLoading || !data)
    return (
      <Wrapper>
        <LoadingBar type={6} />
      </Wrapper>
    );

  return (
    <Wrapper>
      <Tooltip />
      <Title>
        새로운 가계부 초대 <span>{data.invitations.length}개</span>
      </Title>
      <Modal>
        {data.invitations.length === 0 && <Nothing />}
        {data.invitations.map(item => (
          <InviteItem key={item.id} item={item} />
        ))}
      </Modal>
    </Wrapper>
  );
}
