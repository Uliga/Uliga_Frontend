import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useInput from "../useInput";
import toastMsg from "../../components/Toast";
import { checkEmail } from "../../api/auth";
import { updateBook } from "../../api/book";

export default function useSettingBook() {
  const [relationship, onChangeRelationship, setRelationship] = useInput("");
  const [category, onChangeCategory, setCategory] = useInput("");
  const [categories, setCategories] = useState<string[]>([]);
  const [email, onChangeEmail, setEmail] = useInput("");
  const [emails, setEmails] = useState<string[]>([]);
  const [defaultCategories, setDefaultCategories] = useState<string[]>([]);
  const [defaultEmails, setDefaultEmails] = useState<string[]>([]);
  const [avatar, setAvatar] = useState("");

  const addCategory = () => {
    if (categories.includes(category)) {
      toastMsg("이미 추가된 카테고리입니다.");
    } else if (defaultCategories.includes(category)) {
      toastMsg("현재 존재하는 카테고리입니다.");
    } else {
      setCategories(categories.concat(category));
      setCategory("");
    }
  };

  const addEmail = async () => {
    if (emails.includes(email)) {
      toastMsg("이미 추가된 이메일입니다.");
    } else if (defaultEmails.includes(email)) {
      toastMsg("현재 존재하는 구성원입니다.");
    } else {
      const data = await checkEmail(email);
      if (data.exists) {
        setEmails(emails.concat(email));
        setEmail("");
      } else {
        toastMsg("존재하지 않는 계정입니다.");
      }
    }
  };

  const removeEmail = (selected: string) => {
    setEmails(emails.filter(ele => ele !== selected));
  };

  const removeCategory = (selected: string) => {
    setCategories(categories.filter(ele => ele !== selected));
  };

  const removeDefaultCategory = (selected: string) => {
    setDefaultCategories(defaultCategories.filter(ele => ele !== selected));
  };

  const mutateUpdateBook = useMutation(["mutateUpdateBook"], updateBook, {
    onSuccess: () => {
      toastMsg("가계부 수정 완료 👏");
      window.location.reload();
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
    relationship,
    onChangeRelationship,
    setRelationship,
    onChangeCategory,
    category,
    categories,
    setCategories,
    emails,
    setEmails,
    avatar,
    setAvatar,
    email,
    onChangeEmail,
    addCategory,
    addEmail,
    removeEmail,
    removeCategory,
    defaultCategories,
    setDefaultCategories,
    setDefaultEmails,
    mutateUpdateBook,
    removeDefaultCategory,
  };
}
