import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { checkEmail } from "../api/auth";
import useInput from "./useInput";
import toastMsg from "../components/Toast";
import { createAccountBook } from "../api/book";
import { createModalAtom } from "../stores/atoms/context";
import QUERYKEYS from "../constants/querykey";

export default function useCreate() {
  const [name, onChangeName] = useInput("");
  const [email, onChangeEmail, setEmail] = useInput("");
  const [relationship, onChangeRelationship] = useInput("");
  const [category, onChangeCategory, setCategory] = useInput("");
  const [, setCreateModalOpen] = useRecoilState(createModalAtom);

  const DefaultCategories = [
    "🍽️ 식비",
    "☕ 카페 · 간식",
    "🏠 생활",
    "🍙 편의점,마트,잡화",
    "👕 쇼핑",
    "기타",
  ];
  const [Categories, setCategories] = useState<string[]>([]);
  const [Emails, setEmails] = useState<string[]>([]);

  const addCategory = () => {
    if (Categories.includes(category)) {
      toastMsg("이미 추가된 카테고리입니다.");
    } else {
      setCategories(Categories.concat(category));
      setCategory("");
    }
  };

  const addEmail = async () => {
    if (Emails.includes(email)) {
      toastMsg("이미 추가된 이메일입니다.");
    } else {
      const data = await checkEmail(email);
      if (data.exists) {
        setEmails(Emails.concat(email));
        setEmail("");
      } else {
        toastMsg("존재하지 않는 계정입니다.");
      }
    }
  };

  const removeEmail = (selected: string) => {
    setEmails(Emails.filter(ele => ele !== selected));
  };

  const removeCategory = (selected: string) => {
    setCategories(Categories.filter(ele => ele !== selected));
  };

  const InputList = [
    {
      label: "가계부 이름",
      size: 42,
      placeholder: "가계부 이름을 입력해주세요.",
      value: name,
      required: true,
      type: "text",
      onChange: onChangeName,
    },
    {
      label: "가계부 조직",
      size: 42,
      placeholder: "공유 가계부 조직의 관계를 입력해주세요.",
      value: relationship,
      required: true,
      type: "text",
      onChange: onChangeRelationship,
    },
    {
      label: "사용자 초대",
      size: 32,
      placeholder: "사용자의 이메일을 입력해주세요.",
      value: email,
      required: true,
      type: "text",
      onChange: onChangeEmail,
      Button: {
        title: "초대",
        theme: "quaternary",
        onClick: addEmail,
      },
    },

    {
      label: "카테고리 추가",
      size: 32,
      placeholder: "추가할 카테고리를 입력해주세요.",
      value: category,
      required: false,
      type: "text",
      onChange: onChangeCategory,
      Button: {
        title: "추가",
        theme: "quaternary",
        onClick: addCategory,
      },
    },
  ];

  const queryClient = useQueryClient();

  const mutateCreate = useMutation(["createAccountBook"], createAccountBook, {
    onSuccess: () => {
      toastMsg("가계부 생성 완료");
      setCreateModalOpen(false);
      queryClient.invalidateQueries([QUERYKEYS.LOAD_BOOK_LIST]);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });
  const onSubmitForm = async () => {
    if (name.length <= 0 || Emails.length <= 0) {
      toastMsg("필수 입력 조건을 채워주세요.");
    } else {
      await mutateCreate.mutate({
        name,
        emails: Emails,
        categories: Categories,
        relationship,
      });
    }
  };

  return {
    name,
    Emails,
    DefaultCategories,
    Categories,
    InputList,
    removeEmail,
    removeCategory,
    onSubmitForm,
  };
}
