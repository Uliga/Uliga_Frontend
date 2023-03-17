import React from "react";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../../assets/logo";
import COLORS from "../../../constants/color";
import * as S from "./index.styles";
import IconButton from "../../IconButton";
import { invitationModalAtom } from "../../../stores/atoms/context";
import allModalAtom from "../../../stores/selectors/context";
import InvitationModal from "../../InvitationModal";
import PATH from "../../../constants/path";

export default function Header() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [invitationModalOpen, setInvitationModalOpen] =
    useRecoilState(invitationModalAtom);
  const [, setAllModalAtom] = useRecoilState(allModalAtom);
  const utilList = [
    {
      id: 1,
      iconOnly: true,
      iconName: "alarm",
      iconSize: "2.2rem",
      color: COLORS.BLUE,
      border: 0.01,
      onClick: () => {
        setAllModalAtom(false);
      },
    },
    {
      id: 2,
      iconOnly: true,
      iconName: invitationModalOpen ? "messageOpen" : "message",
      iconSize: "2.2rem",
      color: COLORS.BLUE,
      border: 0.01,
      onClick: () => {
        setAllModalAtom(false);
        setInvitationModalOpen(!invitationModalOpen);
      },
    },
  ];
  return (
    <S.Container>
      <S.StyledIcon
        iconName="list"
        size="2rem"
        border={1}
        color={COLORS.GREY[500]}
      />
      <S.Wrapper>
        <S.HomeButton
          onClick={() => {
            navigate(`${PATH.MAIN}/${bookId}`);
          }}
        >
          <Logo />
          <S.Title>우리가</S.Title>
        </S.HomeButton>
      </S.Wrapper>
      <S.UtilWrapper>
        {utilList.map(util => (
          <S.ModalWrapper key={util.iconName}>
            <IconButton
              iconOnly={util.iconOnly}
              iconName={util.iconName}
              iconSize={util.iconSize}
              color={util.color}
              border={util.border}
              onClick={util.onClick}
            />
            {util.id === 2 && invitationModalOpen && <InvitationModal />}
          </S.ModalWrapper>
        ))}
        <S.TutorialButton title="튜토리얼" theme="basic" />
      </S.UtilWrapper>
    </S.Container>
  );
}
