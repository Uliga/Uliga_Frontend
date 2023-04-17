/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useInput from "./useInput";
import REGEX from "../constants/regex";
import { checkNicknameDuplicate } from "../api/auth";
import toastMsg from "../components/Toast";
import { patchMe } from "../api/user";
import QUERYKEYS from "../constants/querykey";

export default function useSocialSignup() {
  const { state } = useLocation();
  const [email, onChangeEmail] = useInput(state);
  const [userName, onChangeName] = useInput("");
  const [nickName, onChangeNickname] = useInput("");
  const [isValidate, setIsValidate] = useState(true);
  const [code, setCode] = useInput("");
  const [match, setMatch] = useState(false);
  const [exist, setExist] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const queryClient = useQueryClient();

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    setIsValidate(REGEX.PASSWORD.test(nickName));
  }, [nickName]);

  const checkNickname = async () => {
    const data = await checkNicknameDuplicate(nickName);

    if (!data.exists) {
      toastMsg("사용 가능한 닉네임 입니다.");
      setExist(!data.exists);
    } else {
      toastMsg("이미 존재하는 닉네임입니다.");
      setExist(!data.exists);
    }
  };

  const mutateUpdateNickname = useMutation(["patchMe"], patchMe, {
    onSuccess: () => {
      toastMsg("회원가입 성공 👏");
      queryClient.invalidateQueries([QUERYKEYS.LOAD_ME]);
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
    onChangeEmail,
    code,
    setCode,
    userName,
    nickName,
    onChangeName,
    onChangeNickname,
    checkNickname,
    match,
    setMatch,
    exist,
    setExist,
    isChecked,
    setIsChecked,
    handleCheckboxChange,
    mutateUpdateNickname,
  };
}
