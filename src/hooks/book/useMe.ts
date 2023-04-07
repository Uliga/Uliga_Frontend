import { useMutation, useQueryClient } from "@tanstack/react-query";
import toastMsg from "../../components/Toast";
import QUERYKEYS from "../../constants/querykey";
import useInput from "../useInput";
import { patchMe } from "../../api/user";

export default function useMe() {
  const queryClient = useQueryClient();
  const [nickName, onChangeNickname] = useInput("");

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
      toastMsg("이미 존재하는 닉네임입니다.");
    },
  });
  return {
    mutateUpdateNickname,
    nickName,
    onChangeNickname,
  };
}
