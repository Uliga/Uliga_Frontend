import { useEffect, useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import useInput from "./useInput";
import REGEX from "../constants/regex";
import { emailSend, codeVerify, authSignup, nickDuplicate } from "../api/auth";
import toastMsg from "../components/common/Toast";

export default function useLogin() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [userName, onChangeName] = useInput("");
  const [nickName, onChangeNickname] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [isValidate, setIsValidate] = useState(true);
  const [code, setCode] = useInput("");
  useEffect(() => {
    setIsValidate(
      REGEX.PASSWORD.test(password) || REGEX.PASSWORD.test(nickName),
    );
  }, [password, passwordCheck, nickName]);

  const mutateEmailSend = useMutation(["emailSend"], emailSend, {
    onSuccess: () => {
      toastMsg("이메일 전송 성공");
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });
  const mutateCodeCheck = useMutation(["codeCheck"], codeVerify, {
    onSuccess: data => {
      toastMsg("이메일 인증 완료");
      console.log("sddd", data);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });
  const mutateSignup = useMutation(["signUp"], authSignup, {
    onSuccess: () => {
      toastMsg("회원가입 성공");
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  const mutateNickCheck = useMutation(["nickCheck"], nickDuplicate, {
    onSuccess: data => {
      toastMsg("사용가능한 닉네임");
      console.log("데이터", data);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });
  const onCheckEmailAuth = () => {
    emailSend(email);
  };
  const AuthTimer = () => {
    const VALIDTIME = 300;
    const time = useRef<number>(VALIDTIME);

    const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

    const [min, setMin] = useState(5);
    const [sec, setSec] = useState(0);

    const decreaseNum = () => {
      time.current -= 1;
      setMin(Math.floor(time.current / 60));
      setSec(time.current % 60);
    };
    const onStartTimer = () => {
      onCheckEmailAuth();
      intervalRef.current = setInterval(decreaseNum, 1000);
      return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    };

    useEffect(() => {
      if (time.current <= 0) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
    }, [sec]);

    return { time, min, sec, onStartTimer };
  };

  return {
    isValidate,
    email,
    password,
    passwordCheck,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
    mutateEmailSend,
    mutateCodeCheck,
    code,
    setCode,
    userName,
    nickName,
    onChangeName,
    onChangeNickname,
    mutateSignup,
    mutateNickCheck,
    AuthTimer,
  };
}
