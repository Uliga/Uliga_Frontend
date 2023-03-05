import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useInput from "./useInput";
import REGEX from "../constants/regex";
import { authLogin } from "../api/auth";

export default function useLogin() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [isValidate, setIsValidate] = useState(true);

  useEffect(() => {
    setIsValidate(REGEX.ID.test(email));
  }, [email]);

  const mutateLogin = useMutation(["login"], authLogin, {
    onSuccess: () => {
      alert("성공");
    },
    onError: ({
      response: {
        data: { message },
      },
    }) => {
      alert(message);
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
