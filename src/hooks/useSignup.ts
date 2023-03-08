/* eslint-disable no-nested-ternary */
import { useEffect, useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import useInput from "./useInput";
import REGEX from "../constants/regex";
import { emailSend, codeVerify, authSignup, nickDuplicate } from "../api/auth";
import toastMsg from "../components/common/Toast";
import PATH from "../constants/path";

export default function useLogin() {
  const navigate = useNavigate();

  const { state } = useLocation();
  const [email, onChangeEmail] = useInput(state);
  const [password, onChangePassword] = useInput("");
  const [userName, onChangeName] = useInput("");
  const [nickName, onChangeNickname] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [isValidate, setIsValidate] = useState(true);
  const [code, setCode] = useInput("");
  const [showText, setShowText] = useState(false);
  const [match, setMatch] = useState(false);
  const [exist, setExist] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    setIsValidate(
      REGEX.PASSWORD.test(password) || REGEX.PASSWORD.test(nickName),
    );
  }, [password, passwordCheck, nickName]);

  const mutateSignup = useMutation(["signUp"], authSignup, {
    onSuccess: () => {
      toastMsg("회원가입 성공");
      navigate(PATH.LOGIN);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  const sendEmailCode = async () => {
    const data = await emailSend({ email });
    if (data) {
      toastMsg("인증 코드 전송 완료");
      setMatch(false);
    }
  };

  const checkEmailCode = async () => {
    const data = await codeVerify({ email, code });
    if (data.matches) {
      toastMsg("이메일 인증 완료.");
      setMatch(true);
    } else {
      toastMsg("올바른 인증 번호를 입력해주세요.");
      setMatch(false);
    }
  };

  const checkNickname = async () => {
    const data = await nickDuplicate(nickName);

    if (!data.exists) {
      toastMsg("사용 가능한 닉네임 입니다.");
      setExist(!data.exists);
    } else {
      toastMsg("이미 존재하는 닉네임입니다.");
      setExist(!data.exists);
    }
  };
  const AuthTimer = () => {
    const VALIDTIME = 300;
    const time = useRef<number>(VALIDTIME);
    const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [min, setMin] = useState(5);
    const [sec, setSec] = useState(0);
    const curTime =
      min === 0 && sec === 0
        ? "인증 시간 초과"
        : `0${min} : ${sec < 10 ? `0${sec}` : sec}`;
    const decreaseNum = () => {
      time.current -= 1;
      setMin(Math.floor(time.current / 60));
      setSec(time.current % 60);
    };
    const onStartTimer = () => {
      // Timer start
      setShowText(true);
      sendEmailCode();
      intervalRef.current = setInterval(decreaseNum, 1000);
      return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    };
    useEffect(() => {
      if (time.current <= 0) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
    }, [sec]);
    return { time, min, sec, onStartTimer, curTime };
  };

  return {
    isValidate,
    email,
    password,
    passwordCheck,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
    code,
    setCode,
    userName,
    nickName,
    onChangeName,
    onChangeNickname,
    mutateSignup,
    AuthTimer,
    showText,
    setShowText,
    checkEmailCode,
    checkNickname,
    match,
    setMatch,
    exist,
    setExist,
    isChecked,
    setIsChecked,
    handleCheckboxChange,
  };
}
