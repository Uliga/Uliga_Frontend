import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { text } from "@storybook/addon-knobs";
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
  const googleDescription = text(
    "google",
    "해당 이메일로 구글 계정이 존재합니다. \n구글로그인으로 이동하시겠습니까?",
  );
  const kakaoDescription = text(
    "kakao",
    "해당 이메일로 카카오 계정이 존재합니다. \n카카오 로그인으로 진행하시겠습니까?",
  );
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
        {deleteDialogOpen && loginType === "GOOGLE" && (
          <Dialog
            size={45}
            title="해당 이메일로 구글 계정이 존재해요!"
            description={googleDescription}
            cancellable
            visible
            onCancel={() => {
              setDeleteDialogOpen(false);
            }}
            onConfirm={() => {
              window.location.href = API.GOOGLE_AUTH_URL;
              setDeleteDialogOpen(false);
            }}
          />
        )}
        {deleteDialogOpen && loginType === "KAKAO" && (
          <Dialog
            size={45}
            title="해당 이메일로 카카오 계정이 존재해요!"
            description={kakaoDescription}
            cancellable
            visible
            onCancel={() => {
              setDeleteDialogOpen(false);
            }}
            onConfirm={() => {
              window.location.href = API.KAKAO_AUTH_URL;
              setDeleteDialogOpen(false);
            }}
          />
        )}
        <S.StyledButton type="submit" title="이메일로 계속하기" />

        <SNSLogin />
      </S.Wrapper>
    </S.Container>
  );
}
