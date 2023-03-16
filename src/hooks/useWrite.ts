import { useState } from "react";
import { useParams } from "react-router-dom";
import { uploadBook } from "../api/book";

export default function useWrite() {
  const { bookId } = useParams();

  const inputMenu: string[] = [
    "분류",
    "날짜",
    "카테고리",
    "결제수단",
    "거래처",
    "금액",
    "메모",
  ];
  type InputTypes = {
    label: string;
    options?: object[];
    value?: boolean | number | string;
    size?: number;
    type?: string;
  };
  const INPUT_SIZE = 11;
  const inputForm: InputTypes[] = [
    {
      label: "isIncome",
      options: [
        { value: "", label: "선택" },
        { value: "지출", label: "지출" },
        { value: "수입", label: "수입" },
      ],
      value: false,
    },
    {
      label: "date",
      size: INPUT_SIZE,
      type: "date",
      value: "",
    },
    {
      label: "category",
      options: [
        { value: undefined, label: "선택" },
        { value: "🍽️ 식비", label: "🍽️ 식비" },
        { value: "☕ 카페 · 간식", label: "☕ 카페 · 간식" },
        { value: "🏠 생활", label: "🏠 생활" },
        { value: "🍙 편의점,마트,잡화", label: "🍙 편의점,마트,잡화" },
        { value: "👕 쇼핑", label: "👕 쇼핑" },
        { value: "기타", label: "기타" },
      ],
      value: undefined,
    },
    {
      label: "payment",
      options: [
        { value: undefined, label: "선택" },
        { value: "현금", label: "현금" },
        { value: "카드", label: "카드" },
        { value: "이체", label: "이체" },
      ],
      value: undefined,
    },
    {
      label: "account",
      size: INPUT_SIZE,
      type: "text",
      value: "",
    },
    {
      label: "value",
      size: INPUT_SIZE,
      type: "number",
      value: "",
    },
    {
      label: "memo",
      size: 19,
      type: "text",
      value: "",
    },
  ];

  const [inputList, setInputList] = useState([inputForm]);
  // console.log("inputList", inputList);
  const createRequest: { [label: string]: any }[] = [];
  type FormProps = {
    [label: string]: any;
  };
  const UploadFull = async () => {
    try {
      await uploadBook({
        id: Number(bookId),
        createRequest,
      });
      console.log({
        id: Number(bookId),
        createRequest,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitForm = () => {
    inputList.map(inputs => {
      const form: FormProps = {
        isIncome: undefined,
        account: "",
        category: "",
        date: "",
        memo: "",
        payment: "",
        value: 0,
        sharedAccountBook: [],
      };
      inputs.map(input => {
        const { label } = input;
        switch (label) {
          case "value":
            form[label] = Number(input.value);
            break;
          case "isIncome":
            if (input.value === "지출") {
              form[label] = false;
            }
            if (input.value === "수입") {
              form[label] = true;
            }
            break;
          default:
            form[label] = input.value;
            break;
        }
        return form[label];
      });
      const requiredFields = ["account", "category", "date", "payment"];
      if (
        requiredFields.every(
          field => form[field] !== "" && form[field] !== undefined,
        )
      ) {
        createRequest.push(form);
      }
      return null;
    });
    console.log(createRequest);
  };
  return {
    inputMenu,
    inputList,
    setInputList,
    inputForm,
    onSubmitForm,
    UploadFull,
  };
}
