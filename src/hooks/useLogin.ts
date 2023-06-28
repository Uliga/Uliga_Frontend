import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useState } from "react";
import useInput from "./useInput";
import REGEX from "../constants/regex";
import { authLogin, authResetPassword, checkEmail } from "../api/auth";
import toastMsg from "../components/Toast";
import PATH from "../constants/path";
import useValidate from "./useValidate";
import { resetPasswordDialogAtom } from "../stores/atoms/context";

export default function useLogin() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [email, onChangeEmail, , isValidateEmail] = useValidate({
    validator: (input: string) => REGEX.ID.test(input),
    initState: state,
  });
  const [password, onChangePassword] = useInput("");
  const [loginType, setLoginType] = useState("");
  const [resetPasswordDialogOpen, setResetPasswordDialogOpen] = useRecoilState(
    resetPasswordDialogAtom,
  );

  const mutateLogin = useMutation(["login"], authLogin, {
    onSuccess: ({ memberInfo, tokenInfo }) => {
      toastMsg("로그인 성공 👏");
      localStorage.setItem("accessToken", tokenInfo.accessToken);
      localStorage.setItem("created", "true");
      localStorage.setItem(
        "privateAccountBookId",
        memberInfo.privateAccountBookId,
      );
      navigate(`${PATH.MAIN}/${memberInfo.privateAccountBookId}`);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  const onClickResetPassword = () => {
    authResetPassword({ email: state }).then(() => {
      toastMsg("해당 이메일로 비밀번호 초기화 메일을 전송했습니다.");
      setResetPasswordDialogOpen(false);
    });
  };

  const [landingEmail, onChangeLandingEmail] = useInput("");

  const mutateCheckEmail = useMutation(["checkEmail"], checkEmail, {
    onSuccess: data => {
      if (data.exists) {
        if (data.loginType === "EMAIL") {
          toastMsg(
            "가입되어 있는 계정이 존재하므로 로그인 페이지로 이동합니다.",
          );
          navigate(PATH.LOGIN, { state: landingEmail });
        } else if (data.loginType === "GOOGLE") {
          setLoginType("GOOGLE");
        } else if (data.loginType === "KAKAO") {
          setLoginType("KAKAO");
        }
      } else {
        toastMsg("가입되어 있는 계정이 없어 회원가입 페이지로 이동합니다.");
        navigate(PATH.SIGNUP, { state: landingEmail });
      }
    },
    onError: ({
      response: {
        data: { message },
      },
    }) => {
      toastMsg(message);
    },
  });

  return {
    isValidateEmail,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    mutateLogin,
    landingEmail,
    onChangeLandingEmail,
    mutateCheckEmail,
    loginType,
    resetPasswordDialogOpen,
    setResetPasswordDialogOpen,
    onClickResetPassword,
    state,
    navigate,
  };
}
