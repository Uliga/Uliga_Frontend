import { useEffect, useState } from "react";
import useInput from "./useInput";
import REGEX from "../constants/regex";

export default function useLogin() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [isValidate, setIsValidate] = useState(true);

  useEffect(() => {
    setIsValidate(REGEX.PASSWORD.test(password));
  }, [password, passwordCheck]);

  return {
    isValidate,
    email,
    password,
    passwordCheck,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
  };
}
