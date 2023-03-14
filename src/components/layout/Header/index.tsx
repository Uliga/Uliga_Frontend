import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import Logo from "../../../assets/logo";
import COLORS from "../../../constants/color";
import Icon from "../../Icon";
import IconButton from "../../IconButton";
import { invitationModalAtom } from "../../../stores/atoms/context";
import InvitationModal from "../../InvitationModal";
import Button from "../../Button";

const Container = styled.div`
  width: 100%;
  height: 5.5rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 192rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 2rem;
`;
const StyledIcon = styled(Icon)`
  margin-left: 4rem;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 700;
  color: ${COLORS.BLUE};
`;

const UtilWrapper = styled.div`
  position: relative;
  right: 10rem;
  width: 20rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  button {
    padding: 0.6rem 1.4rem;
    font-size: 1.3rem;
    font-weight: 300;
  }
`;
const Message = styled.div`
  position: relative;
`;

const TutorialButton = styled(Button)`
  border-radius: 10rem;
`;
export default function Header() {
  const [invitationModalOpen, setInvitationModalOpen] =
    useRecoilState(invitationModalAtom);
  return (
    <Container>
      <StyledIcon
        iconName="list"
        size="2rem"
        border={1}
        color={COLORS.GREY[500]}
      />
      <Wrapper>
        <Logo />
        <Title>우리가</Title>
      </Wrapper>
      <UtilWrapper>
        <Message>
          <IconButton
            iconOnly
            iconName={invitationModalOpen ? "messageOpen" : "message"}
            iconSize="2.3rem"
            color={COLORS.BLUE}
            border={0.01}
            onClick={() => {
              setInvitationModalOpen(!invitationModalOpen);
            }}
          />
          {invitationModalOpen && <InvitationModal />}
        </Message>
        <TutorialButton title="튜토리얼" theme="basic" />
      </UtilWrapper>
    </Container>
  );
}
