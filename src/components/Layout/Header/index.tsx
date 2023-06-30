import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../../assets/logo";
import COLORS from "../../../constants/color";
import * as S from "./index.styles";
import IconButton from "../../IconButton";
import {
  invitationModalAtom,
  scheduleModalAtom,
} from "../../../stores/atoms/context";
import allModalAtom from "../../../stores/selectors/context";
import InvitationModal from "../InvitationModal";
import PATH from "../../../constants/path";
import ScheduleModal from "../ScheduleModal";
import useDetectOutside from "../../../hooks/book/useDetectOutside";
import toastMsg from "../../Toast";

type HeaderProps = {
  onToggleSideBar: () => void;
  onClickSideBar: () => void;
};

export default function Header({
  onToggleSideBar,
  onClickSideBar,
}: HeaderProps) {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [invitationModalOpen, setInvitationModalOpen] =
    useRecoilState(invitationModalAtom);
  const [, setAllModalAtom] = useRecoilState(allModalAtom);
  const [scheduleModalOpen, setScheduleModalOpen] =
    useRecoilState(scheduleModalAtom);

  const modalRef = useRef<HTMLDivElement>(null);
  const invitationButtonRef = useRef<HTMLDivElement>(null);
  const scheduleButtonRef = useRef<HTMLDivElement>(null);

  useDetectOutside({
    refs: [modalRef, invitationButtonRef],
    onOutsideClick: () => setInvitationModalOpen(false),
  });
  useDetectOutside({
    refs: [modalRef, scheduleButtonRef],
    onOutsideClick: () => setScheduleModalOpen(false),
  });

  const utilList = [
    {
      id: 1,
      iconOnly: true,
      iconName: scheduleModalOpen ? "alarmFill" : "alarm",
      iconSize: "2.2rem",
      color: COLORS.BLUE,
      border: 0.01,
      onClick: () => {
        setAllModalAtom(false);
        setScheduleModalOpen(!scheduleModalOpen);
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
      <S.NavigateButton
        iconName="arrowLeft"
        iconSize="1.5rem"
        border={1}
        color={COLORS.GREY[500]}
        theme="normal"
        onClick={() => {
          navigate(-1);
        }}
      />
      <S.StyledIconButton
        iconName="list"
        iconSize="2rem"
        border={1}
        color={COLORS.GREY[500]}
        onClick={onToggleSideBar}
      />
      <S.Wrapper>
        <S.HomeButton
          onClick={() => {
            navigate(`${PATH.MAIN}/${bookId}`);
            onClickSideBar();
          }}
        >
          <Logo />
          <S.Title>우리가</S.Title>
        </S.HomeButton>
      </S.Wrapper>
      <S.UtilWrapper ref={modalRef}>
        {utilList.map(util => (
          <S.ModalWrapper key={util.iconName}>
            <IconButton
              iconOnly={util.iconOnly}
              iconName={util.iconName}
              iconSize={util.iconSize}
              color={util.color}
              border={util.border}
              onClick={() => {
                util.onClick();
                onClickSideBar();
              }}
            />
            {util.id === 1 && scheduleModalOpen && (
              <div ref={scheduleButtonRef}>
                <ScheduleModal />
              </div>
            )}
            {util.id === 2 && invitationModalOpen && (
              <div ref={invitationButtonRef}>
                <InvitationModal />
              </div>
            )}
          </S.ModalWrapper>
        ))}
        <S.TutorialButton
          onClick={() => {
            toastMsg("준비중인 기능입니다.");
          }}
          title="튜토리얼"
          theme="basic"
        />
      </S.UtilWrapper>
    </S.Container>
  );
}
