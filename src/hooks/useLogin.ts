import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useInput from "./useInput";
import REGEX from "../constants/regex";
import { authLogin, checkEmail } from "../api/auth";
import toastMsg from "../components/Toast";
import PATH from "../constants/path";
import useValidate from "./useValidate";

export default function useLogin() {
  const navigate = useNavigate();
  const [email, onChangeEmail, isValidateEmail] = useValidate({
    validator: (input: string) => REGEX.ID.test(input),
  });
  const [password, onChangePassword] = useInput("");
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

  const [landingEmail, onChangeLandingEmail] = useInput("");

  const mutateCheckEmail = useMutation(["checkEmail"], checkEmail, {
    onSuccess: data => {
      if (data.exists) {
        toastMsg("가입되어 있는 계정이 존재하므로 로그인 페이지로 이동합니다.");
        navigate(PATH.LOGIN);
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
  };
}
