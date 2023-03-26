import React from "react";
import styled from "styled-components";
import SubLogo from "../../assets/subLogo";
import COLORS from "../../constants/color";
import { InvitationProps } from "../../interfaces/user";
import Button from "../Button";
import useBook from "../../hooks/book/useBook";

const Container = styled.div`
  display: flex;
  height: 8rem;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  padding-bottom: 1.5rem;
`;

const Info = styled.div`
  gap: 0.4rem;
  justify-content: center;
  flex-direction: column;
  h5 {
    color: ${COLORS.GREY[400]};
    width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h4 {
    color: ${COLORS.GREY[600]};
    width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  button {
    border-radius: 0.7rem;
    font-size: 1.2rem;
    height: 3.5rem;
    padding: 0rem 1.6rem;
    border: none;
    cursor: pointer;
  }
  gap: 0.7rem;
`;

const RefuseButton = styled(Button)`
  &:hover {
    background-color: ${COLORS.GREY[200]};
    color: ${COLORS.BLUE};
  }
`;

export default function InviteItem({ item }: { item: InvitationProps }) {
  const { mutateInvitation } = useBook();

  return (
    <Container>
      <SubLogo />
      <Info>
        <h5>{item.memberName}님의 초대</h5>
        <h4>{item.accountBookName}</h4>
      </Info>
      <ButtonWrapper>
        <RefuseButton
          title="거절"
          theme="quaternary"
          onClick={() => {
            mutateInvitation.mutate({
              id: item.id,
              join: false,
              memberName: item.memberName,
              accountBookName: item.accountBookName,
              createdTime: "2023-03-19T15:36:09.506042877",
            });
          }}
        />
        <Button
          title="수락"
          theme="primary"
          onClick={() => {
            mutateInvitation.mutate({
              id: item.id,
              join: true,
              memberName: item.memberName,
              accountBookName: item.accountBookName,
              createdTime: "2023-03-19T15:36:09.506042877",
            });
          }}
        />
      </ButtonWrapper>
    </Container>
  );
}
