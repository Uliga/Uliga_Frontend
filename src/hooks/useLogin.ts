import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useInput from "./useInput";
import REGEX from "../constants/regex";
import { authLogin } from "../api/auth";
import toastMsg from "../components/common/Toast";

export default function useLogin() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [isValidate, setIsValidate] = useState(true);
  useEffect(() => {
    setIsValidate(REGEX.ID.test(email));
  }, [email]);

  const mutateLogin = useMutation(["login"], authLogin, {
    onSuccess: () => {
      toastMsg("로그인 성공");
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  return {
    isValidate,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    mutateLogin,
  };
}
