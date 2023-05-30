import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LargeLogo } from "../../assets/logo";
import Input from "../../components/Input";
import Detail from "../../components/Book/Landing/detail";
import SNSLogin from "../../components/Book/Landing/sns";
import * as S from "./index.styles";
import useLogin from "../../hooks/useLogin";
import { loadMe } from "../../api/user";
import { IUserInfo } from "../../interfaces/user";
import PATH from "../../constants/path";
import Dialog from "../../components/Dialog";
import { deleteScheduleDialogAtom } from "../../stores/atoms/context";
import API from "../../api/config";

export default function LandingPage() {
  const { landingEmail, onChangeLandingEmail, mutateCheckEmail, loginType } =
    useLogin();
  const navigate = useNavigate();
  const [deleteDialogOpen, setDeleteDialogOpen] = useRecoilState(
    deleteScheduleDialogAtom,
  );
  const googleDescription =
    "해당 이메일로 구글 계정이 존재해요! \n구글 로그인으로 이동하시겠어요?";

  const kakaoDescription =
    "해당 이메일로 카카오 계정이 존재해요! \n카카오 로그인으로 이동하시겠어요?";

  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("created")
    ) {
      loadMe().then((data: IUserInfo) => {
        if (data) {
          navigate(`${PATH.MAIN}/${data.memberInfo.privateAccountBookId}`);
        }
      });
    }
  }, []);

  return (
    <S.Container>
      <LargeLogo />
      <S.Wrapper
        onSubmit={e => {
          e.preventDefault();
          mutateCheckEmail.mutate(landingEmail);
          if (loginType === "GOOGLE" || loginType === "KAKAO") {
            setDeleteDialogOpen(true);
          }
        }}
      >
        <div>
          <h2>우리가에 오신것을 환영합니다 🙆🏻‍♀️</h2>
          <Detail />
        </div>
        <Input
          value={landingEmail}
          onChange={onChangeLandingEmail}
          label="이메일"
          size={46.5}
          required
        />
        <S.StyledButton type="submit" title="이메일로 계속하기" />
        <SNSLogin />
      </S.Wrapper>
      {deleteDialogOpen && (
        <Dialog
          size={40}
          title="💁🏻‍♀️ 해당 이메일로 다른 계정 존재"
          description={
            loginType === "GOOGLE" ? googleDescription : kakaoDescription
          }
          cancellable
          visible
          onCancel={() => {
            setDeleteDialogOpen(false);
          }}
          onConfirm={() => {
            window.location.href =
              loginType === "GOOGLE" ? API.GOOGLE_AUTH_URL : API.KAKAO_AUTH_URL;
            setDeleteDialogOpen(false);
          }}
        />
      )}
    </S.Container>
  );
}
