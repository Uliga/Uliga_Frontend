import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toastMsg from "../../components/Toast";
import QUERYKEYS from "../../constants/querykey";
import useInput from "../useInput";
import { deleteMe, patchMe } from "../../api/user";
import { checkNicknameDuplicate } from "../../api/auth";

export default function useMe() {
  const queryClient = useQueryClient();
  const [nickName, onChangeNickname] = useInput("");
  const navigate = useNavigate();

  const mutateUpdateNickname = useMutation(["patchMe"], patchMe, {
    onSuccess: () => {
      toastMsg("닉네임 변경 완료");
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
    if (!data.exists) {
      toastMsg("사용 가능한 닉네임 입니다.");
      mutateUpdateNickname.mutate({
        nickName,
      });
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
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const showPasswordBtn = document.getElementById("show-password");

  showPasswordBtn?.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
  const lookPassword = async () => {};
  return {
    mutateUpdateNickname,
    nickName,
    onChangeNickname,
    checkNickname,
    deleteUser,
    lookPassword,
  };
}
