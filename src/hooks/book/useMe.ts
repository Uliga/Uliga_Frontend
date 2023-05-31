import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import toastMsg from "../../components/Toast";
import QUERYKEYS from "../../constants/querykey";
import useInput from "../useInput";
import { deleteMe, loadMe, patchMe } from "../../api/user";
import { checkNicknameDuplicate } from "../../api/auth";
import { IUserInfo } from "../../interfaces/user";
import { deleteScheduleDialogAtom } from "../../stores/atoms/context";
import useValidate from "../useValidate";
import REGEX from "../../constants/regex";

export default function useMe() {
  const queryClient = useQueryClient();
  const [password, onChangePassword, , isValidatePassword] = useValidate({
    validator: (input: string) => REGEX.PASSWORD.test(input),
  });
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [applicationPassword, onChangeApplicationPassword] = useInput("123456");
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    password: false,
    passwordCheck: false,
    applicationPassword: false,
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useRecoilState(
    deleteScheduleDialogAtom,
  );
  const navigate = useNavigate();

  const { isLoading: loadingInfo, data: infoData } = useQuery<
    IUserInfo | undefined
  >([QUERYKEYS.LOAD_ME], loadMe);
  const [nickName, onChangeNickname] = useInput(infoData?.memberInfo.nickName);

  const inputs = [
    {
      label: "사용자 이메일",
      value: infoData?.memberInfo.email,
      readOnly: true,
    },
    {
      label: "사용자 이름",
      value: infoData?.memberInfo.userName,
      readOnly: true,
    },
    {
      label: "사용자 닉네임",
      value: nickName,
      placeholder: infoData?.memberInfo.nickName,
      readOnly: false,
      onChange: onChangeNickname,
    },
    {
      label: "비밀번호",
      value: password,
      type: isPasswordVisible.password ? "text" : "password",
      onChange: onChangePassword,
      message:
        !isValidatePassword && password.length > 0
          ? "영문, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하 입력해주세요."
          : "",
      visible: isPasswordVisible.password,
    },
    {
      label: "비밀번호 확인",
      value: passwordCheck,
      type: isPasswordVisible.passwordCheck ? "text" : "password",
      onChange: onChangePasswordCheck,
      message:
        password !== passwordCheck && password.length > 0
          ? "비밀번호가 일치하지 않습니다."
          : "",
      visible: isPasswordVisible.passwordCheck,
    },
    {
      label: "애플리케이션 비밀번호",
      value: applicationPassword,
      type: isPasswordVisible.applicationPassword ? "text" : "password",
      onChange: onChangeApplicationPassword,
      visible: isPasswordVisible.applicationPassword,
    },
  ];

  const lookPassword = (label: string) => {
    switch (label) {
      case "비밀번호":
        setIsPasswordVisible({
          ...isPasswordVisible,
          password: !isPasswordVisible.password,
        });
        break;
      case "비밀번호 확인":
        setIsPasswordVisible({
          ...isPasswordVisible,
          passwordCheck: !isPasswordVisible.passwordCheck,
        });
        break;
      case "애플리케이션 비밀번호":
        setIsPasswordVisible({
          ...isPasswordVisible,
          applicationPassword: !isPasswordVisible.applicationPassword,
        });
        break;
      default:
        break;
    }
  };

  const mutateUpdateMe = useMutation(["patchMe"], patchMe, {
    onSuccess: () => {
      toastMsg("내 정보 변경 완료");
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
  const checkNickname = async () => {
    const data = await checkNicknameDuplicate(nickName);
    if (!data.exists || nickName === infoData?.memberInfo.nickName) {
      toastMsg("사용 가능한 닉네임 입니다.");
      mutateUpdateMe.mutate(
        password.length > 0
          ? {
              nickName,
              password,
            }
          : {
              nickName,
            },
      );
    } else {
      toastMsg("이미 존재하는 닉네임입니다.");
    }
  };

  const deleteUser = async () => {
    try {
      await deleteMe();
      toastMsg("회원 탈퇴가 완료되었습니다.");
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return {
    loadingInfo,
    infoData,
    inputs,
    checkNickname,
    deleteDialogOpen,
    setDeleteDialogOpen,
    deleteUser,
    lookPassword,
    isValidatePassword,
    password,
    passwordCheck,
  };
}
